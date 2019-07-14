from django.conf.urls import url
from . import consumers

websocket_urlpatterns = [
    url(r'^ws/game-master/position/$', consumers.GameMasterPositionConsumer),
    url(r'^ws/game-master/email/$', consumers.GameMasterEmailConsumer),
]
