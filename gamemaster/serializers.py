from gamemaster.models import Email
from rest_framework.serializers import ModelSerializer


class EmailSerializer(ModelSerializer):

    class Meta:
        model = Email
        fields = '__all__'
