from django.db import models


class LeaderboardEntry(models.Model):
    pseudo = models.CharField(max_length=20, default='', blank=True, null=True)
    score = models.IntegerField(default=0, blank=True, null=True)
