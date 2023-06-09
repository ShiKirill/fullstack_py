from rest_framework import serializers
from .models import Disease, Patient, Anamnesis, APStudy

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'

class DiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disease
        fields = '__all__'

class AnamnesisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Anamnesis
        fields = '__all__'

class APStudySerializer(serializers.ModelSerializer):
    class Meta:
        model = APStudy
        fields = '__all__'