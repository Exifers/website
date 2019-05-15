from leaderboard.decorators import send_mail_settings_required
from templated_email import send_templated_mail


@send_mail_settings_required
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


@send_mail_settings_required
def send_templated_mail_wrapper(template_name=None, from_email='cyberstories@gmail.com', recipient_list=None,
                                context=None):
    send_templated_mail(
        template_name=template_name,
        from_email=from_email,
        recipient_list=recipient_list,
        context=context
    )
