from rest_framework import serializers

from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = CustomUser
        fields = ['id', 'username', 'email', 'password', 'created_at']