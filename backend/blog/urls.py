from . import views
from .feeds import LatestPostsFeed
from django.urls import include, path, re_path

urlpatterns = [
    path("feed/rss", LatestPostsFeed(), name="post_feed"),
    path("api/blog/", views.post_list_all, name="blog_list_all"), # POST/GET
    path("api/blog/<str:slug>", views.post_list_single, name="blog_list_single"), # POST/GET
    path("api/blog/<int:pk>", views.post_detail, name="blog_detail"), # DELETE/PUT
]