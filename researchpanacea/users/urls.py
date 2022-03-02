from django.urls import path
from django.conf.urls import include
from . import views
from rest_framework import routers
from .serializers import *
from .viewsets import *

router = routers.DefaultRouter()
router.register('users', UsersViewSet)
router.register('researchpapers', ResearchPapersViewSet)

urlpatterns = [
    path('',include(router.urls))
]
