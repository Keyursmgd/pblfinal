from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('addmeet/',include('meet.urls')),
    path('', include('pict_meeting_calendar.urls')),
    path('admin/', admin.site.urls)
]