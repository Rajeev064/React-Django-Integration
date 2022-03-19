import json
from django.shortcuts import render, redirect
from django.http import HttpResponse
from backend.models import *
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.files.storage import default_storage
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.hashers import make_password, check_password

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
        hashed_pwd = make_password(password)
        email = userdata['email']
        try:
            t = Users.objects.get(username = username)
            print('USER EXISTS')
        except:    
            db = Users(username = username,password = hashed_pwd, email= email )
            db.save()
        # user_data=JSONParser().parse(request)
        # users_serializer=UsersSerializer(data=user_data)
        # if users_serializer.is_valid():
        #     users_serializer.save()
        #     return JsonResponse("Added Successfully",safe=False)
        print('DONE')
        return HttpResponse('DONE')


@csrf_exempt
def login(request):
    if request.method == "POST":
        logindata = json.loads(request.body)
        print(logindata)
        username = logindata['lusername']
        password = logindata['lpassword']
        print(username,password)
        try:
            t = Users.objects.get(username = username)
            print(t)
            if check_password(password, t.password):
                request.session['username'] = username
                print(request.session['username'])
                res = HttpResponse()
                res.set_cookie('username',username)
                # if "username" in request.COOKIES:
                print("Stored in Cookie",request.get_cookie('username'))
                # else:
                #     print('username not in COOKIES')    
                return HttpResponse("LOGGED IN")
            else:
                print("Password Incorrect") 
                return HttpResponse("Password Incorrect")   
            # redirect to success page
        except:    
            print("LOGIN failed")
            return HttpResponse("LOGIN FAILED")
            # Return an 'invalid login' error message.

@csrf_exempt
def ResearchPapersAPI(request,id=0):
    #All research papers will be visisble
    if request.method == "GET":
        print(request.content_params)
        papers = ResearchPapers.objects.all()
        papers_serializer=ResearchPapersSerializer(papers,many=True)
        print(papers_serializer.data)
        print(type(papers_serializer.data))
        test = {'data':papers_serializer.data,'username':request.session['username']}
        print(test)
        return JsonResponse(papers_serializer.data,safe=False)
    if request.method == "POST":
        print(request)
        # print(request.body)
        # paperdata = json.loads(request.body)
        # print(paperdata)
        # title = paperdata['title']
        # abstract = paperdata['abstract']
        title = request.GET.get('title')
        abstract = request.GET.get('abstract')
        db = ResearchPapers(title = title,abstract = abstract)
        db.save()
        print("Research Paper Added")
        return HttpResponse('DONE')
