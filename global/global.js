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


//! delete loader


const loader = document.querySelector(".loader--content")

function stopLoader(){
  setTimeout( ()=>{
    loader.classList.add("fade")
  }, 2000)
  setTimeout(() => {
    loader.remove();
  }, 2200);
}

//! scroll to the top of the page 
const scrollBtn = document.getElementById('scroll')

scrollBtn.addEventListener("click", ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

let timerInterval
Swal.fire({
  title: 'Auto close alert!',
  html: 'I will close in <b></b> milliseconds.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})