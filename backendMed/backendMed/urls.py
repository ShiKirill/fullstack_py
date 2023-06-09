from django.urls import include, path
from rest_framework import routers
from testApp.views import PatientViewSet, DiseaseViewSet, AnamnesisViewSet, APStudyViewSet

router = routers.DefaultRouter()
router.register(r'patients', PatientViewSet)
router.register(r'diseases', DiseaseViewSet)
router.register(r'anamnesises', AnamnesisViewSet)
router.register(r'apstudies', APStudyViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
