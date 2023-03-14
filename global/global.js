const bar = document.querySelector(".hamburger");
const menu = document.querySelector(".header__menu");
const loader = document.querySelector(".loader--content");

function toggleMenu() {
  menu.classList.toggle("active");
  bar.classList.toggle("active");
}

bar.addEventListener("click", toggleMenu);

//! dark/light mode
const modeBtn = document.querySelector(".mode-btn");

let darkMode = true;

function getDarkMode() {
  let darkModeStr = localStorage.getItem("darkmode");
  if (darkModeStr) {
    darkMode = darkModeStr;
  }
}
getDarkMode();

function normal() {
  if (darkMode == "false") {
    document.body.classList.add("light");
    modeBtn.innerHTML = "🌚";
  } else {
    document.body.classList.remove("light");
    modeBtn.innerHTML = "🌞";
  }
}
normal();

modeBtn.addEventListener("click", () => mode());

function mode() {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    modeBtn.innerHTML = "🌚";
    localStorage.setItem("darkmode", "false");
  } else {
    modeBtn.innerHTML = "🌞";
    localStorage.setItem("darkmode", "true");
  }
}





//! delete loader

function removeLoader() {
  setTimeout(() => {
    loader.classList.add("fade");
  }, 2000);
  setTimeout(() => {
    loader.remove();
  }, 2500);
}
