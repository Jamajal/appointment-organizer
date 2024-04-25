from django.shortcuts import render, get_object_or_404

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token


from .serializers import UserSerializer
from .models import CustomUser

@api_view(http_method_names=['GET'])
def read_users(requests):
    try:
        users = CustomUser.objects.all()

        if users:
            serializer = UserSerializer(instance=users, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        return Response('Nenhum usuário foi encontrado no sistema!', status=status.HTTP_404_NOT_FOUND)

    except:
        return Response('Algo de errado aconteceu com o servidor!', status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@api_view(http_method_names=['GET', 'PATCH', 'DELETE'])
def put_detail_delete_user(request, pk):
    user = get_object_or_404(
        CustomUser.objects.all(),
        pk=pk
    )

    if request.method == 'GET':
       serializer = UserSerializer(
            instance=user,
            many=False,
            context={'request': request},
        )
       return Response(serializer.data)

    elif request.method == 'PATCH':
        serializer = UserSerializer(
            instance=user,
            data=request.data,
            many=False,
            context={'request': request},
            partial=True,
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()        

        return Response(serializer.data)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
@api_view(['POST'])
def login(request):
    user = get_object_or_404(CustomUser, email=request.data['email'])
    if not user.check_password(request.data['password']):
        return Response({'detail': 'Not found'}, status=status.HTTP_404_NOT_FOUND)
    
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(instance=user)
    return Response({'token': token.key})

@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = CustomUser.objects.get(email=request.data['email'])
        user.set_password(request.data['password'])
        user.save()
        token = Token.objects.create(user=user)
        return Response({'token': token.key, "user": serializer.data})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def test_token(request):
    return Response({
        'id': request.user.id,
        'email': request.user.email,
        'username': request.user.username,
    })