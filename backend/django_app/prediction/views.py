from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .apps import PredictionConfig
import pandas as pd
import text2emotion as te
import langdetect

# Create your views here.
class Model_Predict(APIView):

    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        data = request.data
        keys = []
        values = []
        for key in data:
            keys.append(key)
            values.append(data[key])
        
        response_dict=te.get_emotion(data["InputText"])
        try:
            response_dict["Language"]=langdetect.detect(data["InputText"])
        except:
            print("Exception")
        #response_dict=data["InputText"]+" Heyy"
        return Response(response_dict, status=200)
