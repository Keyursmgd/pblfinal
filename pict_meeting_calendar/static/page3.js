const modal = document.getElementById('modal');
const closeModalBtn = document.querySelector('.close');
const createMeetingBtn = document.getElementById('create-meeting-btn');
const modifyMeetingBtn = document.getElementById('modify-meeting-btn');
const cancelMeetingBtn = document.getElementById('cancel-meeting-btn');
const meetingForm = document.getElementById('meeting-form');
const createMeetingFields = document.getElementById('create-meeting-fields');

// Open modal when any of the buttons are clicked
createMeetingBtn.addEventListener('click', openModal);
modifyMeetingBtn.addEventListener('click', openModal);
cancelMeetingBtn.addEventListener('click', openModal);

// Close modal when close button is clicked
closeModalBtn.addEventListener('click', closeModal);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

// Show additional fields for creating meetings
createMeetingBtn.addEventListener('click', showCreateMeetingFields);

function showCreateMeetingFields() {
  createMeetingFields.style.display = 'block';
}
