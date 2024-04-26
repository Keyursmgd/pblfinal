from django.urls import path
from . import views
from django.views.generic import TemplateView


app_name = 'pict_meeting_calendar'


urlpatterns = [
    path('', views.pict_meeting_calendar, name='pict_meeting_calendar'),
    path('page2/', TemplateView.as_view(template_name='page2.html'), name='page2'),
    path('page3/', TemplateView.as_view(template_name='page3.html'), name='page3'),
    path('page4/', TemplateView.as_view(template_name='page4.html'), name='page4'),
]
