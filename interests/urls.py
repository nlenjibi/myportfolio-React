from django.urls import path
from . import views

urlpatterns = [
    path('', views.InterestListCreateView.as_view(), name='interest-list-create'),
    path('<int:pk>/', views.InterestDetailView.as_view(), name='interest-detail'),
]