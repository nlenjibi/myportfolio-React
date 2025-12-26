from django.urls import path
from . import views

urlpatterns = [
    path('', views.TestimonialListCreateView.as_view(), name='testimonial-list-create'),
    path('<int:pk>/', views.TestimonialDetailView.as_view(), name='testimonial-detail'),
]