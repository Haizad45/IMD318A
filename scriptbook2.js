
const pages1 = document.querySelectorAll('#flipbook1 .page');
const nextButton1 = document.getElementById('next1');
const prevButton1 = document.getElementById('prev1');
let currentPage1 = 0;

function updateFlipbook1() {
    pages1.forEach((page, index) => {
        if (index <= currentPage1) {
            page.style.transform = 'rotateY(0deg)';
        } else {
            page.style.transform = 'rotateY(180deg)';
        }
    });
}

nextButton1.addEventListener('click', () => {
    if (currentPage1 < pages1.length - 1) {
        currentPage1++;
        updateFlipbook1();
    }
});

prevButton1.addEventListener('click', () => {
    if (currentPage1 > 0) {
        currentPage1--;
        updateFlipbook1();
    }
});


const pages2 = document.querySelectorAll('#flipbook2 .page');
const nextButton2 = document.getElementById('next2');
const prevButton2 = document.getElementById('prev2');
let currentPage2 = 0;

function updateFlipbook2() {
    pages2.forEach((page, index) => {
        if (index <= currentPage2) {
            page.style.transform = 'rotateY(0deg)';
        } else {
            page.style.transform = 'rotateY(180deg)';
        }
    });
}

nextButton2.addEventListener('click', () => {
    if (currentPage2 < pages2.length - 1) {
        currentPage2++;
        updateFlipbook2();
    }
});

prevButton2.addEventListener('click', () => {
    if (currentPage2 > 0) {
        currentPage2--;
        updateFlipbook2();
    }
});
