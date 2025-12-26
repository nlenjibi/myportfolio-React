from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('accounts.urls')),
    path('api/profile/', include('profile.urls')),
    path('api/skills/', include('skills.urls')),
    path('api/education/', include('education.urls')),
    path('api/experience/', include('experience.urls')),
    path('api/portfolio/', include('portfolio.urls')),
    path('api/resume/', include('resume.urls')),
    path('api/services/', include('services.urls')),
    path('api/testimonials/', include('testimonials.urls')),
    path('api/interests/', include('interests.urls')),
    path('api/contact/', include('contact.urls')),
]

# Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)