from rest_framework import generics
from .models import SkillCategory, Skill
from .serializers import SkillCategorySerializer, SkillSerializer


class SkillCategoryListCreateView(generics.ListCreateView):
    queryset = SkillCategory.objects.filter(is_active=True).order_by('order')
    serializer_class = SkillCategorySerializer


class SkillCategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SkillCategory.objects.all()
    serializer_class = SkillCategorySerializer


class SkillListCreateView(generics.ListCreateView):
    queryset = Skill.objects.filter(is_active=True).order_by('order')
    serializer_class = SkillSerializer


class SkillDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer