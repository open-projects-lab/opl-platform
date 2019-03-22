""" After an object get saved this file will be trigered """
# Post_Save is fired when an object is saved
from django.db.models.signals import post_save
# The User models is going to be the sender the model that sends the signal
from django.contrib.auth.models import User
from django.dispatch import receiver
from .models import Profile

@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    """ Check if user was created """
    if created:
        Profile.objects.create(user=instance)
    # instance.profile.save()


@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwargs):
    """ Check if user was created """
    instance.profile.save()
