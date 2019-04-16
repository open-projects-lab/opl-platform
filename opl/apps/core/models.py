""" The file will contain user models """
from django.db import models
from django.contrib.auth.models import User
from PIL import Image

# Create your models here.


class Profile(models.Model):
    """ Profile model """
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')
    skills = models.TextField(default='')
    biography = models.TextField(default='')
    linkedin = models.CharField(max_length=100, default='')
    github = models.CharField(max_length=100, default='')
    slack = models.CharField(max_length=100, default='')

    def __str__(self):
        """
        string representation of profile model
        :return:
        """
        return f'{self.user.username} Profile'
