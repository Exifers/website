from django.db import models


class Email(models.Model):
    object = models.CharField(max_length=200)
    message = models.TextField()
