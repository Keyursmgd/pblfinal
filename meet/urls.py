from django.urls import path
from . import views
urlpatterns=[
    path('addmeet/',views.addmeet,name="addmeet"),
    path('calendar/',views.my_view,name="calendar")
]