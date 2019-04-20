from django.core.mail import send_mail
from leaderboard.models import GameResult, Player, Token
from rest_framework.serializers import ModelSerializer, ListSerializer


class FilteredGameResultsSerializer(ListSerializer):
    def to_representation(self, data):
        data = data.filter(visible=True)
        return super(FilteredGameResultsSerializer, self).to_representation(data)


class GameResultsSerializer(ModelSerializer):
    def create(self, validated_data):
        host = self.context['request'].get_host()
        game_result = super(GameResultsSerializer, self).create(validated_data)
        token = Token.objects.create(game_result=game_result)
        send_mail(
            'Your game results on Cyberstories',
            'Hi, you made a game in Cyberstories, here are your results : \n'
            'stage 1 : ' + str(validated_data['stage1Score']) + '%\n'
            'stage 2 : ' + str(validated_data['stage2Score']) + '%\n'
            'stage 3 : ' + str(validated_data['stage3Score']) + '%\n'
            'stage 4 : ' + str(validated_data['stage4Score']) + '%\n' +
            'If you want those results to be shared in the leaderboard, follow this url :\n'
            'http://{host}/leaderboard/gameresult_visible/{game_result_id}/?token={token_value}\n'.format(
                host=host,
                game_result_id=game_result.id,
                token_value=token.value
            ) +
            'Thank you for playing',
            'cyberstories@gmail.com',
            [validated_data['player'].email],
            fail_silently=False
        )
        return game_result

    class Meta:
        model = GameResult
        list_serializer_class = FilteredGameResultsSerializer
        fields = '__all__'


class PlayerSerializer(ModelSerializer):
    gameResults = GameResultsSerializer(many=True, required=False)

    def create(self, validated_data):
        if validated_data['email'] is not None:
            send_mail(
                'Account created',
                'Your account on Cyberstories has been created, thank you for playing',
                'cyberstories@gmail.com',
                [validated_data['email']],
                fail_silently=False
            )
        return super(PlayerSerializer, self).create(validated_data)

    class Meta:
        model = Player
        fields = '__all__'
