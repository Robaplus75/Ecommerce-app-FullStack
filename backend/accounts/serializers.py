from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
	class Meta():
		fields = ["id_uuid", "email", "first_name", "last_name", "password"]
		model = User
		extra_kwargs = {"id_uuid": {"read_only":True}}
		extra_kwargs = {"password": {"write_only":True}}


	def create(self, validated_data):
		new_user = User.objects.create_user(**validated_data)
		return new_user