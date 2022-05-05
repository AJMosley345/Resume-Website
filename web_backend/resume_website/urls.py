from rest_framework.authtoken import views as drf_views
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import ProjectView


router = routers.DefaultRouter()
router.register('api/projects',ProjectView)

urlpatterns = router.urls