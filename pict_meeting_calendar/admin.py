from django.contrib import admin
from .models import login
from meet.models import meeting
# Register your models here.

admin.site.register(login)
admin.site.register(meeting)