const bar = document.querySelector(".hamburger");
const menu = document.querySelector(".header__menu");

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

//! end dark/light mode

// const refreshBtn = document.querySelector("#refresh");
// const toggleBtn = document.querySelector("#toggle");
// const clearBtn = document.querySelector("#clear");
// const theme = localStorage.getItem("theme");

// theme === "dark" && document.body.classList.add("dark")

// // toggleBtn.addEventListener("click", () => {
// //     document.body.classList.toggle("dark")
// //     if (theme === "dark") {
// //         localStorage.setItem("theme", "light");
// //     } else {
// //         localStorage.setItem("theme", "dark");
// //     }
// // })

// // refreshBtn.addEventListener("click", () => {
// //     location.reload()
// // })

// // clearBtn.addEventListener("click", () => {
// //     localStorage.clear()
// // })
