const videos = document.querySelectorAll('.slideshow-container video');
const nextBtn = document.querySelector('.next-btn');


let currentVideoIndex = 0;

nextBtn.addEventListener('click', () => {
  
  videos[currentVideoIndex].classList.remove('active');

  
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;

  videos[currentVideoIndex].classList.add('active');
});