""" Here all the blog's urls routes will be mapped """
from django.urls import path
from django.conf.urls import include, url
from . import views

app_name = 'core'

urlpatterns = [
    # path('', views.home, name='home-page'),
    url(r'^api/', include('apps.core.api.urls', namespace='api')),
]
