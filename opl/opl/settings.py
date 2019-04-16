"""
Django settings for opl project.

Generated by 'django-admin startproject' using Django 1.11.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.11/ref/settings/
"""

import os
from datetime import timedelta
# ======================================================================================================================
# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
# ======================================================================================================================
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# ======================================================================================================================
# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.11/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
# ======================================================================================================================
SECRET_KEY = os.environ.get("SECRET_KEY")

# ======================================================================================================================
# SECURITY WARNING: don't run with debug turned on in production!
# ======================================================================================================================

# ======================================================================================================================
# DJANGO APPS
# ======================================================================================================================
DJANGO_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

# ======================================================================================================================
# THIRD PARTY APPS for Advanced features
# ======================================================================================================================
THIRD_PARTY_APPS = [
    'crispy_forms',
    'grappelli',
    'nested_admin',
    'corsheaders',
    'rest_framework',
    'rest_framework.authtoken',
    'django_filters',
]

# ======================================================================================================================
# OPL APPS for project
# ======================================================================================================================
OPL_APPS = [
    'apps',
    'apps.core',
]

INSTALLED_APPS = THIRD_PARTY_APPS + DJANGO_APPS + OPL_APPS

# ======================================================================================================================
# DJANGO MIDDLEWARE
# ======================================================================================================================
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'opl.urls'

# ======================================================================================================================
# DJANGO TEMPLATES
# ======================================================================================================================
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'opl.wsgi.application'


# Password validation
# https://docs.djangoproject.com/en/1.11/ref/settings/#auth-password-validators
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.11/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/


# ======================================================================================================================
# STATIC PATHS
# ======================================================================================================================
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

CRISPY_TEMPLATE_PACK = 'bootstrap4'

LOGIN_REDIRECT_URL = 'home-page'

LOGIN_URL = 'login'

MEDIA_URL = '/media/'

GRAPPELLI_ADMIN_TITLE = 'OPL'

# ======================================================================================================================
# MEDIA PATHS
# ======================================================================================================================
#temporary media storage
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# ======================================================================================================================
# below written lines should be imported from local_settings.py
# try:
#     from opl.local_settings import *
# except ImportError:
#     pass
# ======================================================================================================================

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*'] if DEBUG else ['oplserver']

# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

# ======================================================================================================================
# DATABASE CONFIGURATION
# ======================================================================================================================
if DEBUG:
    DATABASES = {
        'default': {
            'ENGINE' : 'django.db.backends.sqlite3',
            'NAME' : os.path.join(BASE_DIR, 'db.sqlite3'),
            }
        }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': os.environ.get("POSTGRES_DB", ''),
            'USER': os.environ.get("POSTGRES_USER", ''),
            'HOST': os.environ.get("POSTGRES_HOST", ''),  # <-- IMPORTANT: same name as docker-compose service!
            'PASSWORD': os.environ.get("POSTGRES_PASSWORD", ''),
            'PORT': '5432',
        }
    }

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES':(
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES':(
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_FILTER_BACKENDS':(
        'django_filters.rest_framework.DjangoFilterBackend',
    ),
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10
}

SIMPLE_JWT = {
    # 'ACCESS_TOKEN_LIFETIME': timedelta(minutes=5),
    'ACCESS_TOKEN_LIFETIME': timedelta(days=1),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'ROTATE_REFRESH_TOKENS': False,
    'BLACKLIST_AFTER_ROTATION': True,

    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,

    'AUTH_HEADER_TYPES': ('Bearer',),
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',

    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',

    'SLIDING_TOKEN_REFRESH_EXP_CLAIM': 'refresh_exp',
    'SLIDING_TOKEN_LIFETIME': timedelta(minutes=5),
    'SLIDING_TOKEN_REFRESH_LIFETIME': timedelta(days=1),
}

CORS_ALLOW_CREDENTIALS = True

if DEBUG:
    CORS_ORIGIN_WHITELIST = (
        'localhost:3000',
    )
    CORS_ORIGIN_REGEX_WHITELIST = (
        'localhost:3000',
    )
