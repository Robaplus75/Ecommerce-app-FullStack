from django.db import models
import uuid

# Create your models here.
class Product(models.Model):
	id_uuid = models.UUIDField(primary_key=True, default=uuid.uuid4())
	name = models.CharField(max_length=100)
	price = models.DecimalField(max_digits=10 ,decimal_places=2)
	image = models.ImageField(upload_to="product_images/")