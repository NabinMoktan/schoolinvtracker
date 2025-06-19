from django.shortcuts import render

from rest_framework import viewsets

from core.serializers import SchoolSerializer
from core.serializers import InfrastructureSerializer
from core.serializers import SubmissionSerializer

from .models import School, Infrastructure, Submission


class SchoolViewSet(viewsets.ModelViewSet):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer

class InfrastructureViewSet(viewsets.ModelViewSet):
    queryset = Infrastructure.objects.all()
    serializer_class = InfrastructureSerializer

class SubmissionViewSet(viewsets.ModelViewSet):
    queryset = Submission.objects.all()
    serializer_class = SubmissionSerializer

    


# Create your views here.
