from django.core.exceptions import PermissionDenied
from django.http import HttpResponse
from leaderboard.models import Token, GameResult
from leaderboard.push import push_players


def gameresult_visible(request, pk):
    token_value = request.GET.get('token', None)
    game_result_id = int(pk)

    if token_value is None:
        raise PermissionDenied
    token = Token.objects.filter(value=token_value).first()
    if token is None:
        raise PermissionDenied
    if token.game_result.id is not game_result_id:
        raise PermissionDenied

    gameresult = GameResult.objects.filter(id=game_result_id).first()
    if gameresult:
        gameresult.visible = True
        gameresult.save()

        push_players()

    return HttpResponse("done")
