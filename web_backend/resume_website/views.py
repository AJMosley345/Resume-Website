from django.shortcuts import render
from rest_framework import serializers, viewsets
from .serializers import ProjectInfoSerializer
from .models import ProjectInfo

# Create your views here.

class ProjectView(viewsets.ModelViewSet):
    serializer_class = ProjectInfoSerializer
    queryset = ProjectInfo.objects.all()
