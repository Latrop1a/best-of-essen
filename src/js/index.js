//import css from '../css/style.css';

const css = require("../css/style.css");

const test = "test";
console.log(test);

/* Navbar */
const hamburger = document.getElementById("btn-hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
