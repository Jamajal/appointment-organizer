from django.urls import path
from .views import read_insert_project, detail_put_delete_project


urlpatterns = [
    path('api/v1/projects', read_insert_project),
    path('api/v1/projects/<int:pk>', detail_put_delete_project)
]