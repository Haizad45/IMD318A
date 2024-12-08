
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}


function updateCalendar() {
    const calendarElement = document.getElementById('calendar');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, options);
    calendarElement.textContent = formattedDate;
}


function initializeClockAndCalendar() {
    updateClock();
    updateCalendar();
    setInterval(updateClock, 1000); 
}
initializeClockAndCalendar();