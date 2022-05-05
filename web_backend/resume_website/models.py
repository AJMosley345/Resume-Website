from django.db import models

# Create your models here.

class ProjectInfo(models.Model):
    
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=30)
    description = models.TextField(max_length=200)
    github = models.URLField()
    image = models.FileField(upload_to="photos/",blank=True)
    show = models.BooleanField(default=False)

    def __str__(self):
        return self.name