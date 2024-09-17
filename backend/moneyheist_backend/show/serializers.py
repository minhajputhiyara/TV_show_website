from rest_framework import serializers
from .models import Episode, Cast, Comment

class EpisodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Episode
        fields = ['id', 'title', 'description', 'air_date', 'image']
        
class CastSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cast
        fields = ['id', 'name', 'profile_pic', 'bio']

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'episode', 'content', 'created_at']
