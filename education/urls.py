from django.urls import path
from . import views

urlpatterns = [
    path('', views.EducationListCreateView.as_view(), name='education-list-create'),
    path('<int:pk>/', views.EducationDetailView.as_view(), name='education-detail'),
]