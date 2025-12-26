from django.urls import path
from . import views

urlpatterns = [
    path('', views.ResumeListCreateView.as_view(), name='resume-list-create'),
    path('<int:pk>/', views.ResumeDetailView.as_view(), name='resume-detail'),
]