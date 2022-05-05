from resume_website.models import ProjectInfo
from rest_framework import generics, viewsets
from .serializers import ProjectInfoSerializer

# Project Info viewset
# allows us to create a CRUD api without specifying methods for functionality

class ProjectInfoViewSet(generics.CreateAPIView):

    queryset = ProjectInfo.objects.filter(show=True)
    serializer_class = ProjectInfoSerializer