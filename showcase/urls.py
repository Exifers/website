from django.urls import re_path
from django.views.generic import TemplateView
from showcase.models import ProductBuild

urlpatterns = [
    re_path(
        '^.*',
        TemplateView.as_view(
            template_name='showcase/index.html',
            extra_context={
                'windows_build_file_url': ProductBuild.objects.filter(platform='WINDOWS').first().file.url,
                'mac_build_file_url': ProductBuild.objects.filter(platform='MAC').first().file.url,
                'linux_build_file_url': ProductBuild.objects.filter(platform='LINUX').first().file.url,
            }
        ),
        name='showcase'
    )
]
