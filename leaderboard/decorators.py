from django.conf import settings


def send_mail_settings_required(wrapped):
    def wrapper(*args, **kwargs):
        if settings.SEND_EMAILS:
            return wrapped(*args, **kwargs)
        return False
    return wrapper
