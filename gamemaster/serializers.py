from gamemaster.models import Email
from gamemaster.push import push_email
from rest_framework.serializers import ModelSerializer


class EmailSerializer(ModelSerializer):
    def create(self, validated_data):
        push_email(validated_data)
        return super(EmailSerializer, self).create(validated_data)

    class Meta:
        model = Email
        fields = '__all__'
