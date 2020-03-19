from . import views
from .feeds import LatestPostsFeed
from django.urls import path, include

urlpatterns = [
    path('', views.PostList, name='home'),
    path('summernote/', include('django_summernote.urls')),
    path("feed/rss", LatestPostsFeed(), name="post_feed"),
    path('<slug:slug>/', views.post_detail, name='post_detail'),
]