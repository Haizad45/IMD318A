const videos = document.querySelectorAll('.slideshow-container video');
const nextBtn = document.querySelector('.next-btn');

// Initialize the current video index
let currentVideoIndex = 0;

// Add event listener for the Next button
nextBtn.addEventListener('click', () => {
  // Hide the currently active video
  videos[currentVideoIndex].classList.remove('active');

  // Move to the next video (loop back to the first if at the end)
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;

  // Show the new active video
  videos[currentVideoIndex].classList.add('active');
});