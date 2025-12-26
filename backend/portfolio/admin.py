from django.contrib import admin
from .models import (
    Intro, About, Skill, Resume, Education, 
    Experience, Portfolio, Service, Testimonial, 
    Interest, Contact
)

@admin.register(Intro)
class IntroAdmin(admin.ModelAdmin):
    list_display = ['name', 'tagline', 'created_at']
    search_fields = ['name', 'tagline']


@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ['title', 'email', 'created_at']
    search_fields = ['title', 'email']


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'proficiency', 'order']
    list_filter = ['category']
    search_fields = ['name', 'category']
    ordering = ['order', 'name']


@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    list_display = ['title', 'uploaded_at']
    search_fields = ['title']


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ['institution', 'degree', 'start_date', 'end_date', 'current']
    list_filter = ['current']
    search_fields = ['institution', 'degree', 'field_of_study']


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ['company', 'position', 'start_date', 'end_date', 'current']
    list_filter = ['current']
    search_fields = ['company', 'position']


@admin.register(Portfolio)
class PortfolioAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'featured', 'order', 'created_at']
    list_filter = ['featured', 'category']
    search_fields = ['title', 'description']
    ordering = ['order', '-created_at']


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['title', 'order', 'created_at']
    search_fields = ['title']
    ordering = ['order', 'title']


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['name', 'company', 'rating', 'order', 'created_at']
    list_filter = ['rating']
    search_fields = ['name', 'company']
    ordering = ['order', '-created_at']


@admin.register(Interest)
class InterestAdmin(admin.ModelAdmin):
    list_display = ['title', 'order', 'created_at']
    search_fields = ['title']
    ordering = ['order', 'title']


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'read', 'created_at']
    list_filter = ['read', 'created_at']
    search_fields = ['name', 'email', 'subject']
    actions = ['mark_as_read']

    def mark_as_read(self, request, queryset):
        queryset.update(read=True)
    mark_as_read.short_description = "Mark selected messages as read"
