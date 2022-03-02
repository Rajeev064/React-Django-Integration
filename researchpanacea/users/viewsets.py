from rest_framework import viewsets
from backend.models import ResearchPapers
from .serializers import *

class ResearchPapersViewSet(viewsets.ModelViewSet):
    serializer_class = ResearchPapersSerializer
    queryset = ResearchPapers.objects.all()


class UsersViewSet(viewsets.ModelViewSet):
    serializer_class = UsersSerializer
    queryset = Users.objects.all()        