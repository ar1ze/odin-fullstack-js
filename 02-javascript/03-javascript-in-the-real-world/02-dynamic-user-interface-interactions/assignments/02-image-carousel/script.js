const images = [
  './images/baguette.jpg',
  './images/coffee.jpg',
  './images/herbs.jpg',
  './images/pho.jpg',
];

let currentIndex = 0;

const carouselImage = document.querySelector('.carousel__image');
carouselImage.src = images[currentIndex];

const prevBtn = document.querySelector('.carousel__button--previous');
const nextBtn = document.querySelector('.carousel__button--next');

const updateImage = function () {
  carouselImage.classList.add('fade-out');

  setTimeout(() => {
    carouselImage.src = images[currentIndex];
    carouselImage.classList.remove('fade-out');
  }, 300);
};

prevBtn.addEventListener('click', function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextBtn.addEventListener('click', function () {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

setInterval(function () {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}, 5000);
