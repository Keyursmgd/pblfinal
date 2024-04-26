// const calendar = document.getElementById('calendar');
// const currentMonthDisplay = document.getElementById('current-month');
// const prevMonthBtn = document.getElementById('prev-month');
// const nextMonthBtn = document.getElementById('next-month');

// let currentDate = new Date();
// let currentMonth = currentDate.getMonth();
// let currentYear = currentDate.getFullYear();

// function renderCalendar() {
//   calendar.innerHTML = '';
//   currentMonthDisplay.textContent = `${getMonthName(currentMonth)} ${currentYear}`;

//   const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
//   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

//   // Create header row with day names
//   const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   daysOfWeek.forEach(day => {
//     const dayElement = document.createElement('div');
//     dayElement.classList.add('day');
//     dayElement.textContent = day;
//     calendar.appendChild(dayElement);
//   });

//   // Fill in the days of the month
//   for (let i = 0; i < firstDayOfMonth; i++) {
//     const emptyDay = document.createElement('div');
//     emptyDay.classList.add('day');
//     calendar.appendChild(emptyDay);
//   }

//   for (let i = 1; i <= daysInMonth; i++) {
//     const dayElement = document.createElement('div');
//     dayElement.classList.add('day');
//     dayElement.textContent = i;
//     calendar.appendChild(dayElement);
//   }
// }

// function getMonthName(month) {
//   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   return months[month];
// }

// prevMonthBtn.addEventListener('click', () => {
//   currentMonth--;
//   if (currentMonth < 0) {
//     currentMonth = 11;
//     currentYear--;
//   }
//   renderCalendar();
// });

// nextMonthBtn.addEventListener('click', () => {
//   currentMonth++;
//   if (currentMonth > 11) {
//     currentMonth = 0;
//     currentYear++;
//   }
//   renderCalendar();
// });

// renderCalendar();

// loginbtn.addEventListener('click',()=>{
//     window.location.href="page2.html";
// });

//tryyying 

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
    dayElement.textContent = i;
    dayElement.addEventListener('click', () => {
      const selectedDate = new Date(currentYear, currentMonth, i);
      const meetingDetails = getMeetingDetails(selectedDate);
      showMeetingDetails(meetingDetails);
      sidebar.classList.add('open');
    });
    calendar.appendChild(dayElement);
  }
}

function getMonthName(month) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[month];
}

function getMeetingDetails(selectedDate) {
  // Implement logic to retrieve meeting details from your data source based on the selected date
  // For now, returning a placeholder object
  return {
    date: selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    details: 'Meeting details for the selected date'
  };
}

function showMeetingDetails(meetingDetails) {
  meetingDetailsDiv.innerHTML = `
    <h3>${meetingDetails.date}</h3>
    <p>${meetingDetails.details}</p>
  `;
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

// Sidebar toggle functionality
const sidebar = document.getElementById('sidebar');
const toggleSidebarButton = document.getElementById('toggleSidebar');

toggleSidebarButton.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});
