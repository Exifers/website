from django.contrib import admin
from django.urls import include, path
from django.urls import re_path
from django.contrib.auth import views as auth_views

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
    re_path('.*', include('showcase.urls'))
]
