from django.db.models import Count
from django.http import JsonResponse
from gamemaster.models import Token
from leaderboard.models import Player
from leaderboard.serializers import PlayerSerializer, GameResultsSerializer
from rest_framework.generics import ListCreateAPIView, CreateAPIView


class ListCreatePlayers(ListCreateAPIView):
    serializer_class = PlayerSerializer
    queryset = Player.objects.annotate(count=Count('gameResults')).exclude(count=0)


class CreateGameResult(CreateAPIView):
    serializer_class = GameResultsSerializer


def validate_token(request, token_value):
    token = Token.objects.filter(value=token_value).first()
    if token is not None:
        return JsonResponse({'valid': True}, status=200)
    return JsonResponse({'valid': False}, status=404)
