from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template import loader
from .models import login



# Create your views here.

def pict_meeting_calendar(request):
  mymembers = login.objects.all().values()
  template = loader.get_template('page1.html')
  context = {
    'mymembers': mymembers,
  }
  return HttpResponse(template.render(context, request))


