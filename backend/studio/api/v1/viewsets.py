from rest_framework import authentication
from studio.models import DDDDDDD
from .serializers import DDDDDDDSerializer
from rest_framework import viewsets

class DDDDDDDViewSet(viewsets.ModelViewSet):
    serializer_class = DDDDDDDSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = DDDDDDD.objects.all()