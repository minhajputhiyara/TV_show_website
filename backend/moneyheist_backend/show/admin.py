from django.contrib import admin
from .models import Episode, Cast, Comment

admin.site.register(Episode)
class EpisodeAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'air_date', 'image')
admin.site.register(Cast)
admin.site.register(Comment)
