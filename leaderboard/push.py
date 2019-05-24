from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from django.http import HttpRequest
from leaderboard import endpoints


def push_players():
    get_request = HttpRequest()
    get_request.method = 'GET'
    players_response = endpoints.ListCreatePlayers.as_view()(get_request)
    players_response.render()

    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)('leaderboard', {
        'type': 'chat_message',
        'message': players_response.content.decode('utf-8')
    })
