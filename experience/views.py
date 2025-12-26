from rest_framework import generics
from .models import Experience
from .serializers import ExperienceSerializer


class ExperienceListCreateView(generics.ListCreateView):
    queryset = Experience.objects.filter(is_active=True).order_by('-start_date')
    serializer_class = ExperienceSerializer


class ExperienceDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer