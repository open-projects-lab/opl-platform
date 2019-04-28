"""
API v1 URLs.
"""
from apps.core.api.v1 import views
from django.conf.urls import url

app_name = 'core'

urlpatterns = [
    url(r'^user/register/$', views.UserRegistrationView.as_view()),
    url(r'^profile/(?P<pk>[0-9]+)/$', views.ProfileUpdateView.as_view()),
]
