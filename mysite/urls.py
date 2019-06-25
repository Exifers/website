from allauth.account.views import ConfirmEmailView
from django.contrib import admin
from django.urls import include, path
from django.urls import re_path
from django.views.generic.base import RedirectView
from mysite.views import FacebookLogin, TwitterLogin

urlpatterns = [
    path('leaderboard/', include('leaderboard.urls')),
    path('gamemaster/', include('gamemaster.urls')),
    path('admin/', admin.site.urls),
    re_path('account-confirm-email/(?P<key>[-:\w]+)/$', ConfirmEmailView.as_view(),  # noqa: W605
            name='account_confirm_email'),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/facebook/', FacebookLogin.as_view(), name='fb_login'),
    path('rest-auth/twitter/', TwitterLogin.as_view(), name='twitter_login'),
    # this url is used to generate email content
    re_path('password-reset/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        RedirectView.as_view(url='/', permanent=True),
        name='password_reset_confirm'),
    re_path('.*', include('showcase.urls'))
]
