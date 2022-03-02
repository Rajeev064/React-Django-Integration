from django.shortcuts import render
from django.http import HttpResponse
import json
from backend.models import Conference
from datetime import datetime

# Create your views here.
def upcoming_conf(request):
    if datetime.now().time().hour == 13:
        # print(datetime.now().time().hour)
        Title, Date, Venue, Web_link = insert_conf_db(request,'./conference.json')
        return HttpResponse(Title+"<br>"+Date +"<br>"+ Venue + "<br>"+ Web_link )
    else:
        return HttpResponse("Latest Conferences comes here")

def registeration(request)  :
    return HttpResponse('Registeration of Conferences and Events come here')

def upcoming_event(request):
    return HttpResponse("Latest Events/Hackathon comes here")

def insert_conf_db(request,name):
    f = open(name)
    data = json.load(f)
    key = data.keys()
    for k in key:
        temp = data[k]
        Title = temp['Title']
        Date = temp['Date']
        Venue = temp['Venue']
        Web_link = temp['Web_link']
        info = temp['Info']
        date = int(Date[:2])
        mon = Date.split(',')[0][-3:]
        year = Date.split(',')[1]
        try:
            t = Conference.objects.get(name = Title,date=date,month = mon,year = year)
            print(Title, date)
            
        except:
            db = Conference(name = Title, date=date,month = mon,year = year, website = Web_link, address = Venue, saves = 0, image = "/",info = info)
            db.save()

    return Title, Date, Venue, Web_link