from leaderboard.models import GameResult, Player
from rest_framework.serializers import ModelSerializer


'''
class LeaderboardEntrySerializer(ModelSerializer):

    def create(self, validated_data):
        pseudo = validated_data.get('pseudo')
        score = validated_data.get('score')
        entry = LeaderboardEntry.objects.filter(pseudo=pseudo).first()
        if entry:
            if score > entry.score:
                entry.score = score
                entry.save()
            return entry
        return super(LeaderboardEntrySerializer, self).create(validated_data)

    class Meta:
        model = LeaderboardEntry
        fields = '__all__'
'''


class GameResultsSerializer(ModelSerializer):
    class Meta:
        model = GameResult
        fields = '__all__'


class PlayerSerializer(ModelSerializer):
    gameResults = GameResultsSerializer(many=True)

    class Meta:
        model = Player
        fields = '__all__'
