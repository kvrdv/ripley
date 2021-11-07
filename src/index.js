// Работа углового меню:
const openCornerMenu = document.querySelector('.corner-menu-button');
const closeCornerMenu = document.querySelector('.corner-menu-button-close');
const cornerMenu = document.querySelector('.corner-menu');

openCornerMenu.addEventListener('click', (event) => {
  cornerMenu.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});

closeCornerMenu.addEventListener('click', (event) => {
  cornerMenu.classList.add('hidden');
  document.body.style.overflow = 'auto';
});

// Работа элементов меню:
const mainItemButton = document.querySelectorAll('.main-item-button');
const mainItemButtonUnpressed = document.querySelectorAll(
  '.main-item-button-unpressed'
);


