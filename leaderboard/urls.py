from django.urls import path
from leaderboard.endpoints import ListLeaderboardEntries, CreateLeaderboardEntry

urlpatterns = [
    path('list_leaderboard_entries', ListLeaderboardEntries.as_view(), name='list_leaderboard_entries'),
    path('create_leaderboard_entry', CreateLeaderboardEntry.as_view(), name='create_leaderboard_entry')
]
