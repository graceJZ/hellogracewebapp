# yoga/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ModuleViewSet, ProgramViewSet, RegistrationViewSet

router = DefaultRouter()
router.register(r'modules', ModuleViewSet)
router.register(r'programs', ProgramViewSet)
router.register(r'registrations', RegistrationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
