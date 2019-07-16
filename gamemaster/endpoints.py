from gamemaster.models import Email
from gamemaster.serializers import EmailSerializer, TokenSerializer
from rest_framework.generics import ListCreateAPIView, CreateAPIView


class ListCreateEmails(ListCreateAPIView):
    serializer_class = EmailSerializer
    queryset = Email.objects.all()


class CreateTokens(CreateAPIView):
    serializer_class = TokenSerializer

