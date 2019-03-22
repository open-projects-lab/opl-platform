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
        return f'{self.user.username} Profile'


    def save(self, *args, **kwargs):
        """ Here we're overriding the save method in
            the superclass so we can resize the image
            to save space on server. """
        super().save()
        img = Image.open(self.image.path)

        if img.height > 300 or img.width > 300:
            output_size = (300, 300)
            img.thumbnail(output_size)
            img.save(self.image.path)
