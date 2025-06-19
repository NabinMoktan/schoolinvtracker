from django.urls import path, include

from rest_framework.routers import DefaultRouter
from .views import SchoolViewSet,InfrastructureViewSet, SubmissionViewSet

router = DefaultRouter()
router.register(r'schools',SchoolViewSet)
router.register(r'infrastructures',InfrastructureViewSet)
router.register(r'submissions',SubmissionViewSet)

urlpatterns = [
    path('',include(router.urls)),
]
