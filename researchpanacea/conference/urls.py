from django.urls import path
from . import views

urlpatterns = [
    path('upcoming_conf',views.upcoming_conf),
    path('registeration',views.registeration),
    path('upcoming_event',views.upcoming_event),
]
