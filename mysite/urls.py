from allauth.account.views import ConfirmEmailView
from django.contrib import admin
from django.urls import include, path
from django.urls import re_path
from mysite.views import FacebookLogin, TwitterLogin

urlpatterns = [
    path('leaderboard/', include('leaderboard.urls')),
    path('admin/', admin.site.urls),
    re_path('account-confirm-email/(?P<key>[-:\w]+)/$', ConfirmEmailView.as_view(),
            name='account_confirm_email'),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/facebook/', FacebookLogin.as_view(), name='fb_login'),
    path('rest-auth/twitter/', TwitterLogin.as_view(), name='twitter_login'),
    re_path('.*', include('showcase.urls'))
]
