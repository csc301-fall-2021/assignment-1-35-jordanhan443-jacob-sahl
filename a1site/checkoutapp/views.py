from django.shortcuts import render
from django.http import HttpResponse
from .models import Item
from rest_framework import viewsets
from .serializers import ItemSerializer

def index(request):
    test_bool = False
    context = {
        'test_bool': test_bool,
    }
    return render(request, 'checkoutapp/index.html', context)

def calculate(request):
    pass

# Create your views here.
class ItemView(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()