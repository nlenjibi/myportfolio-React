from rest_framework import generics
from .models import ProjectCategory, Project
from .serializers import ProjectCategorySerializer, ProjectSerializer


class ProjectCategoryListCreateView(generics.ListCreateView):
    queryset = ProjectCategory.objects.filter(is_active=True).order_by('order')
    serializer_class = ProjectCategorySerializer


class ProjectCategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProjectCategory.objects.all()
    serializer_class = ProjectCategorySerializer


class ProjectListCreateView(generics.ListCreateView):
    queryset = Project.objects.filter(is_active=True).order_by('-created_at')
    serializer_class = ProjectSerializer


class ProjectDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer