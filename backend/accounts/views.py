from django.shortcuts import render
from rest_framework import generics, permissions
from .serializers import UserSerializer
from django.contrib.auth import get_user_model
from .permissions import Is_object_owner
# Create your views here.

User = get_user_model()

class UserCreateAPIView(generics.CreateAPIView):
	serializer_class = UserSerializer
	queryset = User.objects.all()

class UserRetriveAPIView(generics.RetrieveAPIView):
	serializer_class = UserSerializer
	queryset = User.objects.all()
	lookup_field = 'email'
	permission_classes = [Is_object_owner]