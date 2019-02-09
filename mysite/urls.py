from django.contrib import admin
from django.urls import include, path
from django.urls import reverse_lazy
from django.views.generic import RedirectView

urlpatterns = [
    path('', RedirectView.as_view(url=reverse_lazy('showcase'), permanent=True)),
    path('showcase/', include('showcase.urls')),
    path('leaderboard/', include('leaderboard.urls')),
    path('admin/', admin.site.urls),
]