from django.shortcuts import render
from rest_framework import generics, permissions, status
from .serializers import UserSerializer
from django.contrib.auth import get_user_model
from .permissions import Is_object_owner
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
# Create your views here.

User = get_user_model()

class UserCreateAPIView(generics.CreateAPIView):
	serializer_class = UserSerializer
	queryset = User.objects.all()

class UserRetriveAPIView(APIView):
	serializer_class = UserSerializer
	permission_classes = [permissions.IsAuthenticated]

	def get(self, request):
		user = request.user
		serializer = self.serializer_class(user)
		return Response(serializer.data)
