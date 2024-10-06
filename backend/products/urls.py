from django.urls import path
from . import views

urlpatterns = [
    path("products/", views.ProductListView.as_view()),
    path("products/create/", views.ProductCreateView.as_view()),
]