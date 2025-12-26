from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views as auth_views
from portfolio.views import custom_obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('portfolio.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/token-auth/', custom_obtain_auth_token, name='api_token_auth'),
]

admin.site.site_header = 'My Portfolio Admin'
admin.site.site_title = 'My Portfolio Admin Portal'
admin.site.index_title = 'Welcome to My Portfolio Admin Portal'