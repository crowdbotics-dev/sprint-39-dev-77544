
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import DDDDDDDViewSet
router = DefaultRouter()
router.register('ddddddd', DDDDDDDViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
