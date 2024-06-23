# yoga/admin.py
from django.contrib import admin
from .models import Module, Program, Registration

admin.site.register(Module)
admin.site.register(Program)
admin.site.register(Registration)
