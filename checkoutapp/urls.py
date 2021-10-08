from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'items', views.ItemView, 'item')

urlpatterns = [
    path('', views.index, name='index'),
    path('calculate/', views.calculate, name='calculate'),
    # path('api/', views.ItemView, name='item'),
    path('api/', include(router.urls)),
]