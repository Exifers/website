from django.urls import path
from leaderboard.endpoints import ListPlayers

urlpatterns = [
    path('list_players', ListPlayers.as_view(), name='list_players')
]
