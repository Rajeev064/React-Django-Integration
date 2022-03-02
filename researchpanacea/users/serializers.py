from backend.models import Users, ResearchPapers
from rest_framework import serializers

class ResearchPapersSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResearchPapers
        fields = '__all__'

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__' 