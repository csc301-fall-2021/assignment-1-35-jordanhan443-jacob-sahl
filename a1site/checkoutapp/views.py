from django.shortcuts import render
from django.http import HttpResponse
from .models import Item

def index(request):
    test_bool = False
    context = {
        'test_bool': test_bool,
    }
    return render(request, 'checkoutapp/index.html', context)

def calculate(request):
    pass

# Create your views here.
