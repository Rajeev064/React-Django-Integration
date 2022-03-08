from django.urls import path
from django.conf.urls import include
from . import views
from rest_framework import routers
from .serializers import *
from .viewsets import *

urlpatterns=[
    path('register/',views.UsersApi),
    path('researchpapers/',views.ResearchPapersAPI),
    path('login/',views.login)]
