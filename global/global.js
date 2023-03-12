const bar = document.querySelector(".hamburger");
const menu = document.querySelector(".header__menu");

function toggleMenu() {
  menu.classList.toggle("active");
  bar.classList.toggle("active");
}

bar.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);