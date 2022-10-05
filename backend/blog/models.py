from email.policy import default
from enum import unique
from random import choices
from django.db import models
from django.contrib.auth.models import User

STATUS = ((0, "DRAFT"), (1, "PUBLISH"))

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True)
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now=True)
    content = models.TextField()
    status = models.IntegerField(choices=STATUS, default=0)

    class Meta:
        ordering = ["-created_on"]

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        from django.urls import reverse
        return reverse("post_detail", kwargs={"slug": str(self.slug)})
    


class Preview(models.Model):
    preview = models.TextField()
    blog = models.OneToOneField(Post, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
