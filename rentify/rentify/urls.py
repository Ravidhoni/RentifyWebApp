# rentify_backend/urls.py

from django.urls import path, include

urlpatterns = [
    path('api/', include('accounts.urls')),
]
