from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
from . import views

urlpatterns = [
    path("accounts/", views.UserCreateAPIView.as_view()),
    path("accounts/token/refresh/", TokenRefreshView.as_view()),
    path("accounts/token/", TokenObtainPairView.as_view()),
    path("accounts/<str:email>", views.UserRetriveAPIView.as_view()),
]