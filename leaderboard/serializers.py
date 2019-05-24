from leaderboard.emails import send_game_results_email, send_templated_mail_wrapper
from leaderboard.models import GameResult, Player, Token
from leaderboard.push import push_players
from rest_framework.fields import DateField
from rest_framework.serializers import ModelSerializer, ListSerializer


class FilteredGameResultsSerializer(ListSerializer):
    def to_representation(self, data):
        data = data.filter(visible=True)
        return super(FilteredGameResultsSerializer, self).to_representation(data)


class GameResultsSerializer(ModelSerializer):
    date = DateField(format="%Y/%m/%d")

    def create(self, validated_data):
        game_result = super(GameResultsSerializer, self).create(validated_data)
        token = Token.objects.create(game_result=game_result)
        send_game_results_email(
            player=validated_data['player'],
            scores={
                'stage1Score': validated_data['stage1Score'],
                'stage2Score': validated_data['stage2Score'],
                'stage3Score': validated_data['stage3Score'],
                'stage4Score': validated_data['stage4Score'],
            },
            host=self.context['request'].get_host(),
            game_result=game_result,
            token=token
        )
        if self.context['request'].GET.get('push') == 'true':
            push_players()
        return game_result

    class Meta:
        model = GameResult
        list_serializer_class = FilteredGameResultsSerializer
        fields = '__all__'


class PlayerSerializer(ModelSerializer):
    gameResults = GameResultsSerializer(many=True, required=False)

    def create(self, validated_data):
        if validated_data['email'] is not None:
            send_templated_mail_wrapper(
                template_name='account_created',
                from_email='cyberstories@gmail.com',
                recipient_list=[validated_data['email']],
                context={
                    'username': validated_data['pseudo'],
                    'host': self.context['request'].get_host()
                }
            )
        return super(PlayerSerializer, self).create(validated_data)

    class Meta:
        model = Player
        fields = '__all__'
