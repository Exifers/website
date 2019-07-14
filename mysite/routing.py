from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
import leaderboard.routing
import gamemaster.routing

application = ProtocolTypeRouter({
    'websocket': AuthMiddlewareStack(
        URLRouter(
            leaderboard.routing.websocket_urlpatterns +
            gamemaster.routing.websocket_urlpatterns
        )
    )
})
