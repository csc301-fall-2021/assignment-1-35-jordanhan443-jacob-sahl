from django.shortcuts import render
from django.http import HttpResponse
from .models import Item
from rest_framework import viewsets
from .serializers import ItemSerializer

def index(request):
    return render(request, "build/index.html")

def calculate(request):
    pass

# Create your views here.
class ItemView(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()