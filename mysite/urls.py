from django.contrib import admin
from django.urls import include, path
from django.urls import reverse_lazy
from django.views.generic import RedirectView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', RedirectView.as_view(url=reverse_lazy('showcase'), permanent=True)),
    path('showcase/', include('showcase.urls')),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
