from django.db import models
from django.contrib.auth.models import User
from apps.core.constants import GENDER_CHOICES

# Create your models here.


class Person(models.Model):
    user = models.OneToOneField(User)
    fathers_name = models.CharField(max_length=30, null=True, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    cellphone_number = models.CharField(null=True, blank=True, max_length=20)
    chat_id = models.CharField(blank=True, max_length=150, verbose_name='Chat ID')
    full_name = models.CharField(max_length=100, blank=True, null=True, db_index=True)
