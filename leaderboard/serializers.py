from leaderboard.models import LeaderboardEntry
from rest_framework.serializers import ModelSerializer


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
