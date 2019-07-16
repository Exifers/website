from django.db import models
from gamemaster.helpers import generateToken


class Email(models.Model):
    object = models.CharField(max_length=200)
    message = models.TextField()


class Token(models.Model):
    value = models.CharField(max_length=6, primary_key=True, default=generateToken)
