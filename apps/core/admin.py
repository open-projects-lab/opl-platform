"""
admin module for core app
"""
from django.contrib import admin
from apps.core.models import Person
# Register your models here.


admin.site.register(Person)
