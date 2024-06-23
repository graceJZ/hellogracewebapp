from django.shortcuts import render

# Create your views here.
# yoga/views.py
from rest_framework import viewsets
from .models import Module, Program, Registration
from .serializers import ModuleSerializer, ProgramSerializer, RegistrationSerializer

class ModuleViewSet(viewsets.ModelViewSet):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer

class ProgramViewSet(viewsets.ModelViewSet):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer

class RegistrationViewSet(viewsets.ModelViewSet):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer
