from gamemaster.helpers import generateToken
from gamemaster.models import Email, Token
from gamemaster.push import push_email
from rest_framework.serializers import ModelSerializer


class EmailSerializer(ModelSerializer):
    def create(self, validated_data):
        push_email(validated_data)
        return super(EmailSerializer, self).create(validated_data)

    class Meta:
        model = Email
        fields = '__all__'


class TokenSerializer(ModelSerializer):
    def create(self, validated_data):
        validated_data['value'] = generateToken()
        return super(TokenSerializer, self).create(validated_data)

    class Meta:
        model = Token
        fields = '__all__'
