from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def register(request):
    return HttpResponse("Register")

def login(request)  :
    return HttpResponse('Login')

def dashboard(request):
    return HttpResponse("Dashboard")