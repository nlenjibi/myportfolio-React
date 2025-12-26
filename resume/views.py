from rest_framework import generics
from .models import Resume, ResumeSection
from .serializers import ResumeSerializer, ResumeSectionSerializer


class ResumeListCreateView(generics.ListCreateView):
    queryset = Resume.objects.filter(is_active=True).order_by('order')
    serializer_class = ResumeSerializer


class ResumeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer


class ResumeSectionListCreateView(generics.ListCreateView):
    queryset = ResumeSection.objects.filter(is_active=True).order_by('order')
    serializer_class = ResumeSectionSerializer


class ResumeSectionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ResumeSection.objects.all()
    serializer_class = ResumeSectionSerializer