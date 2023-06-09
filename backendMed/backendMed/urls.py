from django.urls import include, path
from rest_framework import routers
from testApp.views import PatientViewSet

router = routers.DefaultRouter()
router.register(r'patients', PatientViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
