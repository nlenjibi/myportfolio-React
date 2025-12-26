from rest_framework import generics
from .models import ServiceCategory, Service
from .serializers import ServiceCategorySerializer, ServiceSerializer


class ServiceCategoryListCreateView(generics.ListCreateView):
    queryset = ServiceCategory.objects.filter(is_active=True).order_by('order')
    serializer_class = ServiceCategorySerializer


class ServiceCategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ServiceCategory.objects.all()
    serializer_class = ServiceCategorySerializer


class ServiceListCreateView(generics.ListCreateView):
    queryset = Service.objects.filter(is_active=True).order_by('order')
    serializer_class = ServiceSerializer


class ServiceDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer