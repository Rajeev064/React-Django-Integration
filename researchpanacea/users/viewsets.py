from rest_framework import viewsets
from backend.models import ResearchPapers
from serializers import ResearchPapersSerializer

class ResearchPapersViewSet(viewsets.ModelViewSet):
    serializer_class = ResearchPapersSerializer

    def get_queryset(self):
        return ResearchPapers.objects.all()