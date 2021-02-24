from django.urls import path
from . import views
from .views import current_user, UserList



urlpatterns = [
    path('current_user/', current_user),
    path('api/user/', views.UserList.as_view() ),
]