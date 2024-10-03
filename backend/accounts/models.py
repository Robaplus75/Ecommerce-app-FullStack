from django.db import models
from django.contrib.auth.models import AbstractUser
from .CustomUserManager import CustomUserManager
import uuid
# Create your models here.

class CustomUser(AbstractUser):
	id_uuid = models.UUIDField(primary_key=True, default=uuid.uuid4())
	username = models.CharField(
        "username",
        max_length=150,
    )
	email = models.EmailField("email address", unique=True)
	USERNAME_FIELD = "email"
	REQUIRED_FIELDS = ["first_name"]
	objects = CustomUserManager()