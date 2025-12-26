from django.urls import path
from . import views

urlpatterns = [
    path('', views.ExperienceListCreateView.as_view(), name='experience-list-create'),
    path('<int:pk>/', views.ExperienceDetailView.as_view(), name='experience-detail'),
]