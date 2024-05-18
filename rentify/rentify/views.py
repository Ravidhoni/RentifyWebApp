# rentify/views.py
from django.http import HttpResponse

def index(request):
    return HttpResponse("Welcome to Rentify! Visit /api/ to access the API.")
