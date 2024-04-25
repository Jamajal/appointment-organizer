from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Project
from .serializers import ProjectSerializer

@api_view(http_method_names=['GET', 'POST'])
def read_insert_project(request):
    if request.method == 'GET':
        try:
            users = Project.objects.all()

            if users:
                serializer = ProjectSerializer(instance=users, many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)

            return Response('Não foi encontrado nenhum projeto no sistema!', status=status.HTTP_404_NOT_FOUND)
        
        except:
            return Response('Ocorreu algum erro ao tentar encontrar os projetos!', status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    elif request.method == 'POST':
        try:
            serializer = ProjectSerializer(
                data=request.data, 
                context={'request': request}
            )

            serializer.is_valid(raise_exception=True)
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        except:
            return Response('Houve um erro ao tentar criar o projeto!', status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(http_method_names=['GET', 'PATCH', 'DELETE'])
def detail_put_delete_project(request, pk):
    try:
        project = Project.objects.get(pk=pk)

    except:
        return Response(f'Não foi possível encontrar o projeto com o id {pk}!', status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        try:            
            serializer = ProjectSerializer(instance=project, many=False)
            return Response(serializer.data, status=status.HTTP_200_OK)

        except: 
            return Response(f'Algo deu errado ao recuperar os dados do projeto de id {pk}!', status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    elif request.method == 'PATCH':
        try:
            serializer = ProjectSerializer(
                instance=project,
                data=request.data,
                context={'request': request},
                partial=True
            )

            serializer.is_valid(raise_exception=True)
            serializer.save()

            return Response(serializer.data, status=status.HTTP_200_OK)

        except:
            return Response(f'Algo deu errado ao alterar os dados do projeto de id {pk}!', status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    elif request.method == 'DELETE':
        try:
            project.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

        except:
            return Response(f'Algo deu errado ao deletar o projeto de id {pk}!', status=status.HTTP_500_INTERNAL_SERVER_ERROR)
