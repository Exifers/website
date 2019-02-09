from leaderboard.models import LeaderboardEntry
from leaderboard.serializers import LeaderboardEntrySerializer
from rest_framework.exceptions import PermissionDenied
from rest_framework.generics import ListAPIView, CreateAPIView


class ListLeaderboardEntries(ListAPIView):
    serializer_class = LeaderboardEntrySerializer
    queryset = LeaderboardEntry.objects.all().order_by('-score')


class CreateLeaderboardEntry(CreateAPIView):
    serializer_class = LeaderboardEntrySerializer

    def create(self, request, *args, **kwargs):
        token = request.data.get('token', None)
        if token is not 'pX9KduLXLhVTSxPe':
            raise PermissionDenied
        return super(CreateLeaderboardEntry, self).create(request, *args, **kwargs)
