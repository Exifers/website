from django.urls import path
from django.views.generic import TemplateView

from showcase import views
from showcase.models import ProductBuild

urlpatterns = [
    path('download', views.download, name='download'),
    path(
        'react',
        TemplateView.as_view(
            template_name='showcase/index.html',
            extra_context={
                'windows_build_file_url': ProductBuild.objects.filter(platform='WINDOWS').first().file.url,
                'mac_build_file_url': ProductBuild.objects.filter(platform='MAC').first().file.url,
                'linux_build_file_url': ProductBuild.objects.filter(platform='LINUX').first().file.url,
            }
        ),
        name='showcase'
    ),
    path('download', views.download, name='download'),
    path('documentation', TemplateView.as_view(template_name='showcase/documentation.html'), name='documentation'),
    path('leaderboard', TemplateView.as_view(template_name='showcase/leaderboard.html'), name='leaderboard'),
    path('credits', TemplateView.as_view(template_name='showcase/credits.html'), name='credits'),
    path('articles', TemplateView.as_view(template_name='showcase/articles.html'), name='articles')
]
