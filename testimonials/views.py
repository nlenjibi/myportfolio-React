from rest_framework import generics
from .models import Testimonial
from .serializers import TestimonialSerializer


class TestimonialListCreateView(generics.ListCreateView):
    queryset = Testimonial.objects.filter(is_active=True).order_by('-created_at')
    serializer_class = TestimonialSerializer


class TestimonialDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer
