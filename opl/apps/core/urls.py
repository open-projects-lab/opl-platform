""" Here all the blog's urls routes will be mapped """
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home-page'),
]
