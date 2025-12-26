from rest_framework import generics
from .models import ContactInfo, ContactMessage
from .serializers import ContactInfoSerializer, ContactMessageSerializer


class ContactInfoListCreateView(generics.ListCreateView):
    queryset = ContactInfo.objects.filter(is_active=True).order_by('order')
    serializer_class = ContactInfoSerializer


class ContactInfoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ContactInfo.objects.all()
    serializer_class = ContactInfoSerializer


class ContactMessageListCreateView(generics.ListCreateView):
    queryset = ContactMessage.objects.all().order_by('-created_at')
    serializer_class = ContactMessageSerializer


class ContactMessageDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer