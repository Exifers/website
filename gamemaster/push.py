import json

from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer


def push_email(email):
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)('gameMaster', {
        'type': 'email',
        'message': json.dumps(email)
    })
