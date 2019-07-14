from django.conf.urls import url
from gamemaster.endpoints import ListCreateEmails

urlpatterns = [
    url('emails/$', ListCreateEmails.as_view(), name='list_emails')
]
