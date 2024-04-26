from datetime import datetime, timedelta
from django.http import JsonResponse
from django.shortcuts import redirect,render
from .models import meeting

def addmeet(request):
    print(request.method)
    if request.method == "POST":
        title = request.POST.get('title')
        description = request.POST.get('description')
        location = request.POST.get('location')
        datetime_str = request.POST.get('date-time')
        duration_minutes = int(request.POST.get('duration'))
        
        # Convert datetime string to a datetime object
        datetime_obj = datetime.strptime(datetime_str, '%Y-%m-%dT%H:%M')
        

        # Create meeting instance
        meeting_instance = meeting(
            title=title,
            description=description,
            location=location,
            datetime=datetime_obj,
            meeting_duration=timedelta(minutes=duration_minutes)  # Convert duration to timedelta object
        )
        meeting_instance.save()
        return redirect('calendar')  # Redirect to the same page after successfully adding the meeting

    return render(request, "page4.html")

def my_view(request):
    meetings=meeting.objects.all()
    return render(request,"calendar.html",{'meetings':meetings})

    