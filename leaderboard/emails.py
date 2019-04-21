from templated_email import send_templated_mail


def send_game_results_email(player, scores, host, game_result, token):
    send_templated_mail(
        template_name='game_results',
        from_email='cyberstories@gmail.com',
        recipient_list=[player.email],
        context={
            'username': player.pseudo,
            'scores': {
                'stage1Score': str(scores['stage1Score']),
                'stage2Score': str(scores['stage2Score']),
                'stage3Score': str(scores['stage3Score']),
                'stage4Score': str(scores['stage4Score']),
            },
            'gameresult_visible_link':
                'http://{host}/leaderboard/gameresult_visible/{game_result_id}/?token={token_value}\n'.format(
                host=host,
                game_result_id=game_result.id,
                token_value=token.value
            ),
            'host': host
        }
    )
