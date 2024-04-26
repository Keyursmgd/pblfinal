const meetings = [
    { title: 'Coffee Chat', dateTime: '2024-01-11T09:00', duration: 60 },
    { title: 'Financial Update', dateTime: '2024-01-17T10:00', duration: 60 }
];

document.getElementById('meeting-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form input values
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;
    const dateTime = document.getElementById('date-time').value;
    const duration = parseInt(document.getElementById('duration').value);
    
    // Check for meeting clash
    const meetingStart = new Date(dateTime);
    const meetingEnd = new Date(meetingStart.getTime() + duration * 60000); // Convert duration from minutes to milliseconds
    let clash = false;
    for (const meeting of meetings) {
      const existingMeetingStart = new Date(meeting.dateTime);
      const existingMeetingEnd = new Date(existingMeetingStart.getTime() + meeting.duration * 60000); // Convert duration from minutes to milliseconds
      if (
        (meetingStart >= existingMeetingStart && meetingStart < existingMeetingEnd) || // Check if new meeting starts during an existing meeting
        (meetingEnd > existingMeetingStart && meetingEnd <= existingMeetingEnd) ||     // Check if new meeting ends during an existing meeting
        (meetingStart <= existingMeetingStart && meetingEnd >= existingMeetingEnd)      // Check if new meeting overlaps an existing meeting entirely
      ) {
        clash = true;
        break;
      }
    }
    
    // Display appropriate message
    const successModal = document.getElementById('success-modal');
    const successContent = document.querySelector('.modal-content p');
    if (clash) {
      successContent.textContent = 'Meeting cannot be added. Please change the timing.';
      successContent.style.color = 'red';
      successModal.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
    } else {
      successContent.textContent = 'Meeting Added Successfully ✔';
      successContent.style.color = 'green';
      successModal.style.backgroundColor = 'rgba(0, 128, 0, 0.2)';
      // Add the new meeting to the meetings array
      meetings.push({ title: title, dateTime: dateTime, duration: duration });
    }
    
    successModal.style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('success-modal').style.display = 'none';
});
