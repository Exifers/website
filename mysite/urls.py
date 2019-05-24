from allauth.account.views import ConfirmEmailView
from django.contrib import admin
from django.urls import include, path
from django.urls import re_path
from django.contrib.auth import views as auth_views
from mysite.views import FacebookLogin, TwitterLogin

urlpatterns = [
    path('leaderboard/', include('leaderboard.urls')),
    path('admin/', admin.site.urls),
    path('accounts/login/', auth_views.LoginView.as_view(template_name='showcase/index.html')),
    path('accounts/logout/', auth_views.LogoutView.as_view(template_name='showcase/index.html')),
    path('accounts/password_change/', auth_views.PasswordChangeView.as_view(template_name='showcase/index.html')),
    path('accounts/password_change/done/',
         auth_views.PasswordChangeDoneView.as_view(template_name='showcase/index.html'), name='password_change_done'),
    path('accounts/password_reset/', auth_views.PasswordResetView.as_view(template_name='showcase/index.html')),
    path('accounts/password_reset/done/',
         auth_views.PasswordResetDoneView.as_view(template_name='showcase/index.html'), name='password_reset_done'),
    path('accounts/reset/<uidb64>/<token>/',
         auth_views.PasswordResetConfirmView.as_view(template_name='showcase/index.html'),
         name='password_reset_confirm'),
    path('accounts/reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='showcase/index.html'),
         name='password_reset_complete'),
    re_path('account-confirm-email/(?P<key>[-:\w]+)/$', ConfirmEmailView.as_view(),
        name='account_confirm_email'),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/facebook/', FacebookLogin.as_view(), name='fb_login'),
    path('rest-auth/twitter/', TwitterLogin.as_view(), name='twitter_login'),
    re_path('.*', include('showcase.urls'))
]
