const dropdown = document.querySelector('.dropdown');
const button = dropdown.querySelector('.dropdown__button');
const arrow = button.querySelector('.dropdown__button-arrow');
const menu = dropdown.querySelector('.dropdown__menu');

button.addEventListener('click', () => {
  menu.classList.toggle('dropdown__menu--visible');
  arrow.classList.toggle('dropdown__button-arrow--active');
});

document.addEventListener('click', (event) => {
  if (!dropdown.contains(event.target)) {
    menu.classList.remove('dropdown__menu--visible');
    arrow.classList.remove('dropdown__button-arrow--active');
  }
});
