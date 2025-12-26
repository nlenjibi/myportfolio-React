from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import Profile
from .serializers import ProfileSerializer


class ProfileListCreateView(generics.ListCreateView):
    queryset = Profile.objects.filter(is_active=True)
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class ProfileDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]