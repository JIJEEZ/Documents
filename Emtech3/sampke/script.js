// script.js
let currentImageIndex = 0;
const images = document.querySelectorAll('.slider img');

function showNextImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

// Initial display
images[currentImageIndex].style.display = 'block';
