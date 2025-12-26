from django.urls import path
from . import views

urlpatterns = [
    path('info/', views.ContactInfoListCreateView.as_view(), name='contact-info-list-create'),
    path('info/<int:pk>/', views.ContactInfoDetailView.as_view(), name='contact-info-detail'),
    path('messages/', views.ContactMessageListCreateView.as_view(), name='contact-message-list-create'),
    path('messages/<int:pk>/', views.ContactMessageDetailView.as_view(), name='contact-message-detail'),
]