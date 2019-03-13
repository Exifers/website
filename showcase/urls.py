from django.urls import re_path
from django.views.generic import TemplateView
from showcase.models import ProductBuild

urlpatterns = [
    re_path(
        '^.*',
        TemplateView.as_view(
            template_name='showcase/index.html',
            extra_context={
                'windows_build_file_url': ProductBuild.objects.filter(platform='WINDOWS').first(),
                'mac_build_file_url': ProductBuild.objects.filter(platform='MAC').first(),
                'linux_build_file_url': ProductBuild.objects.filter(platform='LINUX').first(),
            }
        ),
        name='showcase'
    )
]
