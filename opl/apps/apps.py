"""
configuration for apps module
"""

from django.apps import AppConfig


class AppsConfig(AppConfig):
    """
    config class for apps module
    """
    name = 'apps'

    def ready(self):
        import apps.core.signals
