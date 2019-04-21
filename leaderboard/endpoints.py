from django.db.models import Count
from leaderboard.models import Player
from leaderboard.serializers import PlayerSerializer, GameResultsSerializer
from rest_framework.generics import ListCreateAPIView, CreateAPIView


class ListCreatePlayers(ListCreateAPIView):
    serializer_class = PlayerSerializer
    queryset = Player.objects.annotate(count=Count('gameResults')).exclude(count=0)


class CreateGameResult(CreateAPIView):
    serializer_class = GameResultsSerializer
