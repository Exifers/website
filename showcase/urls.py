from django.urls import path
from django.views.generic import TemplateView

from showcase import views

urlpatterns = [
    path('', TemplateView.as_view(template_name='showcase/index.html'), name='showcase'),
    path('about', TemplateView.as_view(template_name='showcase/about.html'), name='about'),
    path('download', TemplateView.as_view(template_name='showcase/download.html'), name='download'),
    path('documentation', TemplateView.as_view(template_name='showcase/documentation.html'), name='documentation'),
    path('leaderboard', TemplateView.as_view(template_name='showcase/leaderboard.html'), name='leaderboard'),
    path('credits', TemplateView.as_view(template_name='showcase/credits.html'), name='credits')
]
