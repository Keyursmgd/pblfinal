const calendar = document.getElementById('calendar');
const currentMonthDisplay = document.getElementById('current-month');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const meetingDetailsDiv = document.getElementById('meeting-details');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function renderCalendar() {
  calendar.innerHTML = '';
  currentMonthDisplay.textContent = `${getMonthName(currentMonth)} ${currentYear}`;

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Create header row with day names
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysOfWeek.forEach(day => {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.textContent = day;
    calendar.appendChild(dayElement);
  });

  // Fill in the days of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyDay = document.createElement('div');
    emptyDay.classList.add('day');
    calendar.appendChild(emptyDay);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    const abcdContainer = document.createElement('div');
  abcdContainer.textContent = "abcd";
  abcdContainer.classList.add('abcd');
  dayElement.appendChild(abcdContainer);
    dayElement.textContent = i;
    dayElement.addEventListener('click', () => {
      const selectedDate = new Date(currentYear, currentMonth, i);
      navigateToMeetingDetails(selectedDate);
    });
    calendar.appendChild(dayElement);
  }
}

function getMonthName(month) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[month];
}

function navigateToMeetingDetails(selectedDate) {
  const formattedDate = selectedDate.toISOString().split('T')[0]; // Format the date as needed
  window.location.href = `/meeting_details/${formattedDate}`; // Replace with your URL pattern
}

prevMonthBtn.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});

// Initial rendering
renderCalendar();
