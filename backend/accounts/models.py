from django.db import models
from django.contrib.auth.models import AbstractUser
from .CustomUserManager import CustomUserManager
# Create your models here.

class CustomUser(AbstractUser):
	username = models.CharField(
        "username",
        max_length=150,
    )
	email = models.EmailField("email address", unique=True)
	USERNAME_FIELD = "email"
	REQUIRED_FIELDS = ["first_name"]
	objects = CustomUserManager()