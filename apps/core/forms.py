""" In this file we will put the user registration form """
from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Profile

class UserRegisterForm(UserCreationForm):
    """ In this class will add the addictional requires fields """
    email = forms.EmailField()
    first_name = forms.CharField(max_length=20)
    last_name = forms.CharField(max_length=20)

    # In the class Meta  we'll add the model this form will interact
    # with
    class Meta:
        model = User
        # These are the fields we would like to show
        fields = ['username', 'email', 'first_name', 'last_name', 'password1', 'password2']


class UserUpdateForm(forms.ModelForm):
    """ These class will allow us to update user info """
    email = forms.EmailField()
    first_name = forms.CharField(max_length=20)
    last_name = forms.CharField(max_length=20)

    class Meta:
        model = User
        # These are the fields we would like to update
        fields = ['username', 'email', 'first_name', 'last_name']

class ProfileUpdateForm(forms.ModelForm):
    """ These class will allow us to update user profile info """
    class Meta:
        model = Profile
        fields = ['image', 'skills', 'biography', 'linkedin', 'github', 'slack']
