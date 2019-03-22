"""
configuration module for core app
"""
from django.apps import AppConfig


class CoreConfig(AppConfig):
    """
    config class for core app
    """
    name = 'core'

    def ready(self):
        import apps.core.signals
