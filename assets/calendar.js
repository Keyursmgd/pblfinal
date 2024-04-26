// script.js
document.addEventListener('DOMContentLoaded', function() {
    const dateCells = document.querySelectorAll('.date-cell');
    
    // Fetch meeting data from Django view and populate calendar cells
    fetch('/addmeet/') // URL to your Django view
        .then(response => response.json())
        .then(data => {
            data.forEach(meeting => {
                const cell = dateCells.find(cell => cell.dataset.date === meeting.datetime.slice(0, 10));
                if (cell) {
                    cell.innerHTML += `<div class="meeting-info">
                        <h3>${meeting.title}</h3>
                        <p>${meeting.description}</p>
                        <p>${meeting.location}</p>
                    </div>`;
                }
            });
        })
        .catch(error => console.error('Error fetching meetings:', error));
});
