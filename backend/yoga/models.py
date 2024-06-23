# yoga/models.py
from django.db import models

class Module(models.Model):
    module_id = models.CharField(max_length=100, primary_key=True)
    name = models.CharField(max_length=200)
    short_description = models.TextField()
    description = models.TextField()
    promotion_video = models.URLField()
    benefits = models.TextField()
    program_guidelines = models.TextField()
    registration_guidelines = models.TextField()

class Program(models.Model):
    program_id = models.CharField(max_length=100, primary_key=True)
    module = models.ForeignKey(Module, on_delete=models.CASCADE)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    session_info = models.TextField()
    street_1 = models.CharField(max_length=200)
    street_2 = models.CharField(max_length=200, blank=True)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=10)
    program_fee = models.DecimalField(max_digits=10, decimal_places=2)
    phone = models.CharField(max_length=20)
    email = models.EmailField()

class Registration(models.Model):
    registration_id = models.CharField(max_length=100, primary_key=True)
    program = models.ForeignKey(Program, on_delete=models.CASCADE)
    jotform_data = models.JSONField()
