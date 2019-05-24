import uuid
from django.db import models


class Player(models.Model):
    pseudo = models.CharField(max_length=20, default='', blank=True, null=True)
    email = models.EmailField(blank=True, null=True)

    def __str__(self):
        return self.pseudo


class GameResult(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='gameResults')

    stage1Score = models.FloatField()
    stage2Score = models.FloatField()
    stage3Score = models.FloatField()
    stage4Score = models.FloatField()

    date = models.DateField(auto_now_add=True)

    visible = models.BooleanField(default=False)

    def __str__(self):
        return self.player.pseudo + '_' + str(self.date)


class Token(models.Model):
    value = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    creation_time = models.DateTimeField(auto_now_add=True)
    game_result = models.ForeignKey(GameResult, on_delete=models.CASCADE)
