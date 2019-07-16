from django.conf.urls import url
from gamemaster.endpoints import ListCreateEmails, CreateTokens
from leaderboard.endpoints import validate_token

urlpatterns = [
    url('emails/$', ListCreateEmails.as_view(), name='list_emails'),
    url('tokens/$', CreateTokens.as_view(), name='create_tokens'),
    url('validate_token/(?P<token_value>[A-Z0-9]{6})/$', validate_token, name='validate_token'),
]
