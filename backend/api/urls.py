from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('supply/', views.SupplyListView, name='api_list_supply'),
    path('supply/<int:pk>', views.SupplyView.as_view(), name='api_details_supply'),
]