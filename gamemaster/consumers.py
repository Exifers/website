from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
import json


class GameMasterPositionConsumer(WebsocketConsumer):
    def connect(self):
        self.group_name = 'gameMasterPosition'

        # Join group
        async_to_sync(self.channel_layer.group_add)(
            self.group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        # Leave group
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
                'type': 'position',
                'message': message
            }
        )

    # Receive position from game master group
    def position(self, event):
        message = event['message']

        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'message': message
        }))


class GameMasterEmailConsumer(WebsocketConsumer):
    def connect(self):
        self.group_name = 'gameMasterEmail'

        # Join group
        async_to_sync(self.channel_layer.group_add)(
            self.group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        # Leave group
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
                'type': 'email',
                'message': message
            }
        )

    # Receive email from game master group
    def email(self, event):
        message = event['message']

        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'message': message
        }))
