from rest_framework import generics
from .models import Education
from .serializers import EducationSerializer


class EducationListCreateView(generics.ListCreateView):
    queryset = Education.objects.filter(is_active=True).order_by('-start_date')
    serializer_class = EducationSerializer


class EducationDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer