from django.contrib import admin
from .models import ProjectInfo

# Register your models here.
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'description', 'github','image', 'show')
admin.site.register(ProjectInfo, ProjectAdmin)
