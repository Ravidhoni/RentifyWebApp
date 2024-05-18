from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser


class Property(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    location = models.CharField(max_length=100)
    area = models.FloatField()
    bedrooms = models.IntegerField()
    bathrooms = models.IntegerField()
    amenities = models.CharField(max_length=200)
    rent_amount = models.DecimalField(max_digits=10, decimal_places=2)
    photos = models.ImageField(upload_to='property_photos/')
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class User(AbstractUser):
    pass
