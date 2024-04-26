from django.db import models
from django.utils import timezone
# Create your models here.
class meeting(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    datetime = models.DateTimeField(default=timezone.now)
    meeting_duration = models.DurationField()

    def __str__(self):
        return self.title 