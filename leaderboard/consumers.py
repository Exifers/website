from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
import json


class LeaderboardConsumer(WebsocketConsumer):
    def connect(self):
        self.group_name = 'leaderboard'

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    def receive(self, text_data):
        message = text_data

        # Send message to room group
        async_to_sync(self.channel_layer.group_send)(
            self.group_name,
            {
                'type': 'players',
                'message': message
            }
        )

    # Receive players from leaderboard group
    def players(self, event):
        message = event['message']

        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'message': message
        }))
