from gamemaster.models import Email
from gamemaster.serializers import EmailSerializer
from rest_framework.generics import ListCreateAPIView


class ListCreateEmails(ListCreateAPIView):
    serializer_class = EmailSerializer
    queryset = Email.objects.all()
