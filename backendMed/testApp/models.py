from django.db import models

class Patient(models.Model):
    fullName = models.CharField(max_length=255)
    weight = models.FloatField()
    height = models.FloatField()
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    diseaseId = models.IntegerField()
    anamnesisId = models.IntegerField()
    apStudyId = models.IntegerField()
