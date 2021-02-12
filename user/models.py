from django.db import models

class User(models.Model): 
        name=models.CharField(max_length=100)
        email = models.EmailField()
        lastLogin=models.DateTimeField(auto_now_add=True)
# Create your models here.
