from django.urls import path
from django.conf.urls import include
from . import views
from rest_framework import routers
from .serializers import *
from .viewsets import *

urlpatterns=[
    path('user/',views.UsersApi),]
