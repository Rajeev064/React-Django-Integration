from backend.models import Users, ResearchPapers
from rest_framework import serializers

class ResearchPapersSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResearchPapers
        fields = ResearchPapers.objects.all()
        