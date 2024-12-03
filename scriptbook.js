const pages = document.querySelectorAll('.page');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
let currentPage = 0;

function updateFlipbook() {
    pages.forEach((page, index) => {
        if (index <= currentPage) {
            page.style.transform = 'rotateY(0deg)';
        } else {
            page.style.transform = 'rotateY(180deg)';
        }
    });
}

nextButton.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updateFlipbook();
    }
});

prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updateFlipbook();
    }
});
