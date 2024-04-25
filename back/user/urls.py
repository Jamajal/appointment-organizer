from django.urls import path, re_path
from .views import read_users, put_detail_delete_user, login, signup, test_token

urlpatterns = [
    path('api/v1/users/', read_users),
    path('api/v1/users/<int:pk>', put_detail_delete_user),

    re_path('api/v1/auth/login', login),
    re_path('api/v1/auth/signup', signup),
    re_path('api/v1/auth/test_token', test_token),
]