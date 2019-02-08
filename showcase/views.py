from django.shortcuts import render
from showcase.models import ProductBuild


def download(request):
    return render(request, 'showcase/download.html', {
        'windows_build': ProductBuild.objects.filter(platform='WINDOWS').first(),
        'mac_build': ProductBuild.objects.filter(platform='MAC').first(),
        'linux_build': ProductBuild.objects.filter(platform='LINUX').first(),
    })
