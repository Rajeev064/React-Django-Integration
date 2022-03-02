from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
import numpy as np
from .models import Conference


# Create your views here.
@csrf_exempt
def recommendation(request, id = 0):
    if request.method == 'GET':
        #sql query
        li = []
        user_id = li[0]
        user_info = li[1:]
        corr_score = np.dot(user_info , user_info)
        idx = user_id[id]
        output = corr_score[idx]
        return JsonResponse(output)

    
