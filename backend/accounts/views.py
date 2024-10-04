from django.shortcuts import render
from rest_framework import generics
from .serializers import UserSerializer
from django.contrib.auth import get_user_model
# Create your views here.

User = get_user_model()

class UserCreateAPIView(generics.CreateAPIView):
	serializer_class = UserSerializer
	queryset = User.objects.all()