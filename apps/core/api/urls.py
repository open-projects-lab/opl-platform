"""
API v1 URLs.
"""
from django.conf.urls import include, url

app_name = 'core'

urlpatterns = [
    url(r'^core/v1/', include('apps.core.api.v1.urls', namespace='v1')),
]
