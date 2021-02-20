
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('', include('frontend.urls')),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/v1/', include('accounting.urls', namespace='accounting')),
    path('api/v1/auth/', include('djoser.urls.base')),
    path('api/v1/auth/', include('djoser.urls.authtoken')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)