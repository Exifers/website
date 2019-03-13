from django.db import models


class Player(models.Model):
    pseudo = models.CharField(max_length=20, default='', blank=True, null=True)

    def __str__(self):
        return self.pseudo


class GameResult(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='gameResults')

    stage1Score = models.FloatField()
    stage2Score = models.FloatField()
    stage3Score = models.FloatField()
    stage4Score = models.FloatField()

    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.player.pseudo + '_' + str(self.date)
