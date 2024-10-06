from rest_framework import generics, permissions
from .serializers import ProductSerialzier
from .models import Product

class ProductListView(generics.ListAPIView):
	serializer_class = ProductSerialzier
	queryset = Product.objects.all()


class ProductCreateView(generics.CreateAPIView):
	serializer_class = ProductSerialzier
	queryset = Product.objects.all()
