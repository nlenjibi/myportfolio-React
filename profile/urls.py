from django.urls import path
from . import views

urlpatterns = [
    path('', views.ProfileListCreateView.as_view(), name='profile-list-create'),
    path('<int:pk>/', views.ProfileDetailView.as_view(), name='profile-detail'),
]