from django.db.models import fields
from rest_framework import serializers
from resume_website.models import ProjectInfo

# project serializer

class ProjectInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProjectInfo
        fields = ['name','description','github','image']