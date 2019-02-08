from django.urls import path

from showcase import views

urlpatterns = [
    path('', views.index, name='showcase'),
    path('about', views.index, name='about'),
    path('download', views.index, name='download'),
    path('documentation', views.index, name='documentation'),
    path('leaderboard', views.index, name='leaderboard'),
    path('credits', views.index, name='credits')
]
