from rest_framework import viewsets
from .models import Patient, Disease, Anamnesis, APStudy
from .serializers import PatientSerializer, DiseaseSerializer, AnamnesisSerializer, APStudySerializer

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class DiseaseViewSet(viewsets.ModelViewSet):
    queryset = Disease.objects.all()
    serializer_class = DiseaseSerializer

class AnamnesisViewSet(viewsets.ModelViewSet):
    queryset = Anamnesis.objects.all()
    serializer_class = AnamnesisSerializer

class APStudyViewSet(viewsets.ModelViewSet):
    queryset = APStudy.objects.all()
    serializer_class = APStudySerializer