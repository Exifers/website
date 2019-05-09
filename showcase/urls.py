from django.urls import re_path
from django.views.generic import TemplateView
from showcase.models import ProductBuild

urlpatterns = [
    re_path(
        '^.*',
        TemplateView.as_view(
            template_name='showcase/index.html',
            extra_context={
                'windows_builds': ProductBuild.objects.filter(platform='WINDOWS'),
                'mac_builds': ProductBuild.objects.filter(platform='MAC'),
                'linux_builds': ProductBuild.objects.filter(platform='LINUX'),
            }
        ),
        name='showcase'
    )
]
