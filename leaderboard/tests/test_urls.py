from django.test import TestCase
from leaderboard.models import Player, GameResult, Token


class UrlsTest(TestCase):
    def setUp(self):
        self.player = Player.objects.create(pseudo='John', email='john.doe@gmail.com')

    def test_players(self):
        response = self.client.get('/leaderboard/players/')
        self.assertEqual(response.status_code, 200)

    def test_gameresults(self):
        response = self.client.post('/leaderboard/gameresults/', {
            'date': '2000-01-01',
            'stage1Score': 10,
            'stage2Score': 20,
            'stage3Score': 30,
            'stage4Score': 40,
            'player': self.player.id
        })
        self.assertEqual(response.status_code, 201)

    def test_gameresult_visible_invalid_token(self):
        response = self.client.get('/leaderboard/gameresult_visible/1/')
        self.assertEqual(response.status_code, 403)

    def test_gameresult_visible_valid_token(self):
        game_result = GameResult.objects.create(
            date='200-01-01',
            player=self.player,
            stage1Score=10,
            stage2Score=20,
            stage3Score=30,
            stage4Score=40
        )
        token = Token.objects.create(game_result=game_result)

        response = self.client.get('/leaderboard/gameresult_visible/{}/'.format(token.value))
        self.assertEqual(response.status_code, 200)
