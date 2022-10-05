from . import views
from .feeds import LatestPostsFeed
from django.urls import path

urlpatterns = [
    path('', views.PostList.as_view(), name='home'),
    path('<slug:slug>/', views.PostDetail.as_view(), name='post_detail'),
    path("feed/rss", LatestPostsFeed(), name="post_feed")
]