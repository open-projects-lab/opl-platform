from rest_framework import serializers
from apps.core.models import User, Profile
from django.contrib.auth.hashers import make_password


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username", "first_name", "last_name", "email", "password")

    def create(self, validated_data):
        """
        overriding create method to set password hash
        :param validated_data:
        :return:
        """
        if validated_data.get('password'):
            validated_data['password'] = make_password(validated_data['password'])
            user = User.objects.create(**validated_data)
            return user


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ("id", "skills", "biography", "linkedin", "github", "slack")
