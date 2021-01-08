import css from '../css/style.css';

const test = 'test';
console.log(test);

/* Navbar */
let hamburger = document.getElementById('btn-hamburger');
let mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
