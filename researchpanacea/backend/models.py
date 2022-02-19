from django.db import models

# Create your models here.

# I was  here 
class Conference(models.Model):
    name = models.CharField(max_length=500)
    date = models.IntegerField()
    month = models.CharField(max_length=10)
    day = models.CharField(max_length=10)
    website = models.CharField(max_length=500)
    address = models.CharField(max_length=1000)
    image = models.URLField()
    saves = models.IntegerField(default=0)
    