const menuToggle = document.getElementById('menu-toogle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const navLinksItems = document.querySelectorAll('.nav-links a');

navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-track img');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let index = 0;

function updateCarousel() {
    // Moves the track by 100% of the container width per index
    track.style.transform = `translateX(${-index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    index++;
    if (index >= images.length) index = 0; // Loop back to start
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    index--;
    if (index < 0) index = images.length - 1; // Loop to end
    updateCarousel();
});