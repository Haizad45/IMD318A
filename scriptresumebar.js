document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skill-meter-bar");

  skillBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0"; // Set initial width to 0
    setTimeout(() => {
      bar.style.transition = "width 1.5s ease";
      bar.style.width = width; // Animate to the full width
    }, 200);
  });
});