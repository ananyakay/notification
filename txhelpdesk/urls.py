from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from txhelpdesk import views

app_name = "txhelpdesk"

router = routers.DefaultRouter()
router.register('notification', views.NotificationViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('index/', views.index, name='index'),
    path('txhelpdesk/', include(router.urls)),
    path('', include('django.contrib.auth.urls')), 
]
