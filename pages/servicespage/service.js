window.onload = function () {
  stopLoader();
};

const qualityDesc = document.querySelector(".quality__desc")
const qualityBtn = document.querySelector(".quality__btn--first")
const qualityMore = document.querySelector(".quality__more")
const booking = document.querySelector(".booking")
let viewQuality = false;

qualityBtn.addEventListener("click", ()=>{
  if(!viewQuality){
    qualityMore.style.display = "inline"
    qualityBtn.innerHTML = "Read Less"
    viewQuality = true;
    booking.style.paddingTop = "80px"
  }
  else{
    viewQuality = false;
    qualityMore.style.display = "none";
    qualityBtn.innerHTML = "Read More"
  }
})

let bg = document.getElementById("bg")
let hamburger = document.getElementById("hamburgerr")
let road = document.getElementById("road")
let mountain = document.getElementById("mountain")
let text = document.getElementById("text")

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    bg.style.top = value * 0.5 + 'px'
    hamburger.style.left = -value * 0.55 + 'px'
    mountain.style.top = -value * 0.15 + 'px'
    road.style.top = value * 0.15 + 'px'
    text.style.top = value * 1 +'px'
})
