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

class Disease(models.Model):
    pulse = models.IntegerField()
    knowAH = models.BooleanField()
    useHypotensive = models.BooleanField()
    hasDiseases = models.BooleanField()
    hypotensStage = models.IntegerField()
    hypotensRisk = models.IntegerField()

class Anamnesis(models.Model):
    education = models.IntegerField()
    sleepHours = models.FloatField()
    alcohol = models.BooleanField()
    smoking = models.BooleanField()
    sigaretsCount = models.IntegerField()
    smokingDuration = models.FloatField()
    physAct = models.IntegerField()
    workPlace = models.CharField(max_length=255)

class APStudy(models.Model):
    sapBefore = models.IntegerField()
    dapBefore = models.IntegerField()
    sapAfter = models.IntegerField()
    dapAfter = models.IntegerField()
