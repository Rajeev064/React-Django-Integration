import email
import json
from django.shortcuts import render
from django.http import HttpResponse
from backend.models import *
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from django.core.files.storage import default_storage

# Create your views here.
def register(request):
    return HttpResponse("Register")

def login(request)  :
    return HttpResponse('Login')

def dashboard(request):
    return HttpResponse("Dashboard")


@csrf_exempt
def UsersApi(request,id=0):
    if request.method=='GET':
        users = Users.objects.all()
        users_serializer=UsersSerializer(users,many=True)
        return JsonResponse(users_serializer.data,safe=False)
    elif request.method=='POST':
        userdata = json.loads(request.body)
        print(userdata)
        username = userdata['username']
        password = userdata['password']
        email = userdata['email']
        try:
            t = Users.objects.get(username = username,password = password)
            print('USER EXISTS')
        except:    
            db = Users(username = username,password = password, email= email )
            db.save()
        # user_data=JSONParser().parse(request)
        # users_serializer=UsersSerializer(data=user_data)
        # if users_serializer.is_valid():
        #     users_serializer.save()
        #     return JsonResponse("Added Successfully",safe=False)
        print('DONE')
        return HttpResponse('DONE')

