//! Loader



window.onload = function () {
  stopLoader();
};

//! Read More button in knife About section



const aboutDesc = document.querySelector(".knife__about--desc");
const aboutMore = document.querySelector(".knife__about--more");
const aboutBtn = document.querySelector(".knife__about--btn");

let viewAbout = false;

function About() {
  if (!viewAbout) {
    aboutMore.style.display = "inline";
    aboutBtn.innerHTML = "Read Less";
    viewAbout = true;
  } else {
    aboutMore.style.display = "none";
    aboutBtn.innerHTML = "Read More";
    viewAbout = false;
  }
}

aboutBtn.addEventListener("click", About);


//! Read More button in knife About section



const historyDesc = document.querySelector(".knife__history--desc");
const historyMore = document.querySelector(".knife__history--more");
const historyBtn = document.querySelector(".knife__history--btn");

let viewHistory = false;
function history() {
  if (!viewHistory) {
    historyMore.style.display = "inline";
    historyBtn.innerHTML = "Read Less";
    viewHistory = true;
  } else {
    viewHistory = false;
    historyMore.style.display = "none";
    historyBtn.innerHTML = "Read More";
  }
}

historyBtn.addEventListener("click", history);





//! Read More in Update section

const updateBtn = document.querySelectorAll(".update__table--item--btn");
const updateDesc = document.querySelectorAll(".update__table--item--desc");
const updateMore = document.querySelectorAll(".update__table--item--more");

updateBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (updateMore[index].classList.contains("hide")) {
      updateMore[index].classList.remove("hide");
      updateDesc[index].style.marginBottom = "-1rem";
      btn.innerHTML = "Read Less";
    } else {
      updateMore[index].classList.add("hide");
      btn.innerHTML = "Read More";
    }
  });
});



//! Update section images

const loadMoreBtn = document.querySelector("#load-more");
let currentItem = 3;

let boxes = document.querySelectorAll(".update__table--item");

loadMoreBtn.addEventListener("click", () => {
  if (currentItem < boxes.length) {
    currentItem += 3;
    for (let i = 0; i < currentItem; i++) {
      boxes[i].style.display = "flex";
      if (currentItem == 9) {
        loadMoreBtn.innerHTML = "View Less"
      }
    }
  } else {
    for (let i = currentItem - 1; i > 2; i--) {
      boxes[i].style.display = "none";
      loadMoreBtn.innerHTML = "View More"
      currentItem = 3;
    }
  }
});
