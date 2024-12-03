const daysContainer = document.getElementById("days");
const monthYear = document.getElementById("month-year");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const timeDisplay = document.getElementById("time");

let currentDate = new Date();

function renderCalendar(date) {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  // Month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Set month and year
  monthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;

  // Clear previous days
  daysContainer.innerHTML = "";

  // Fill in blank days for the first week
  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyDiv = document.createElement("div");
    daysContainer.appendChild(emptyDiv);
  }

  // Add days of the month
  for (let day = 1; day <= lastDateOfMonth; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.textContent = day;

    // Highlight current day
    if (
      day === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    ) {
      dayDiv.classList.add("current-day");
    }

    daysContainer.appendChild(dayDiv);
  }
}

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Navigate to previous month
prevButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

// Navigate to next month
nextButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

// Initial render
renderCalendar(currentDate);
setInterval(updateTime, 1000);