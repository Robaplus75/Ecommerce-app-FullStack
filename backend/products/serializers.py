from rest_framework import serializers
from .models import Product

class ProductSerialzier(serializers.ModelSerializer):
	class Meta():
		model = Product
		fields = ["id_uuid", "name", "price", "image"]