// Function to display the current time
function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clockElement.textContent = `Time: ${hours}:${minutes}:${seconds}`;
}

// Function to display the current date
function updateCalendar() {
  const calendarElement = document.getElementById('calendar');
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString(undefined, options);
  calendarElement.textContent = `Date: ${formattedDate}`;
}

// Update clock and calendar every second
setInterval(updateClock, 1000);
updateCalendar();
