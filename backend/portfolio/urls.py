from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    IntroViewSet, AboutViewSet, SkillViewSet,
    ResumeViewSet, EducationViewSet, ExperienceViewSet,
    PortfolioViewSet, ServiceViewSet, TestimonialViewSet,
    InterestViewSet, ContactViewSet
)

router = DefaultRouter()
router.register(r'intro', IntroViewSet)
router.register(r'about', AboutViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'resume', ResumeViewSet)
router.register(r'education', EducationViewSet)
router.register(r'experience', ExperienceViewSet)
router.register(r'portfolio', PortfolioViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'testimonials', TestimonialViewSet)
router.register(r'interests', InterestViewSet)
router.register(r'contact', ContactViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
