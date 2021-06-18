//import css from '../css/style.css';

const css = require('../css/style.css');

const test = 'test';
console.log(test);

// to be moved
const startGame = () => {};

/* Navbar */
const hamburger = document.getElementById('btn-hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const startButton = document.getElementById('btn-start');

// event listeners

//mobile menu
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

//start game Button
startButton.addEventListener('click', () => startGame());
