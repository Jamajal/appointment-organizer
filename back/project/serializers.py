from rest_framework import serializers

from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = Project
        fields = ['id', 'name', 'description', 'code', 'created_at']
