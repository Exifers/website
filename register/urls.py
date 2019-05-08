from django.conf.urls import url
from register.views import register

urlpatterns = [
    url('register/', register, name='register')
]