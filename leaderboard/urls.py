from django.conf.urls import url
from leaderboard.endpoints import ListCreatePlayers, CreateGameResult
from leaderboard.views import gameresult_visible

urlpatterns = [
    url('players/$', ListCreatePlayers.as_view(), name='list_players'),
    url('gameresults/$', CreateGameResult.as_view(), name='create_gameresult'),
    url('gameresult_visible/(?P<pk>\d+)/$', gameresult_visible, name='gameresult_visible')
]
