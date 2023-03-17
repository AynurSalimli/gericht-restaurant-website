window.onload = function () {
  stopLoader();
};

var templateParams = {
  from_name: "Gericht",
  to_name: "",
  to_email: "",
};
document
  .querySelector(".subscribe__email--btn")
  .addEventListener("click", (e) => {
    e.preventDefault();
    let nameInput = document.querySelector(".subscribe__name--input");
    let emailInput = document.querySelector(".subscribe__email--input");
    templateParams.to_name = nameInput.value;
    templateParams.to_email = emailInput.value;
    let subscriptions = localStorage.getItem("subscriptions");
    if (subscriptions) {
      subscriptions.forEach((subscriber) => {
        if (subscriber.email.trim() == emailInput.value.trim()) {
          window.alert("Your already subscriber");
          return;
        }
      });
    }
    sendEmail();
    nameInput.value = "";
    emailInput.value = "";
  });



document.querySelector(".subscribe__email--btn").addEventListener("click",()=>{
  let timerInterval
  Swal.fire({
    title: 'Your subscription invitation was sent to your email address',
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
})
 
  

//! Quality section more button

const qualityDesc = document.querySelector(".quality__desc");
const qualityBtn = document.querySelector(".quality__btn--first");
const qualityMore = document.querySelector(".quality__more");
const booking = document.querySelector(".booking");
let viewQuality = false;

qualityBtn.addEventListener("click", () => {
  if (!viewQuality) {
    qualityMore.style.display = "inline";
    qualityBtn.innerHTML = "Read Less";
    viewQuality = true;
    booking.style.paddingTop = "80px";
  } else {
    viewQuality = false;
    qualityMore.style.display = "none";
    qualityBtn.innerHTML = "Read More";
  }
});

//! Arrow button to top of the scroll

let bg = document.getElementById("bg");
let hamburger = document.getElementById("hamburgerr");
let road = document.getElementById("road");
let mountain = document.getElementById("mountain");
let text = document.getElementById("text");

window.addEventListener("scroll", function () {
  var value = window.scrollY;
  bg.style.top = value * 0.5 + "px";
  hamburger.style.left = -value * 0.55 + "px";
  mountain.style.top = -value * 0.15 + "px";
  road.style.top = value * 0.15 + "px";
  text.style.top = value * 1 + "px";
});

//! Booking alert

const book = document.querySelector(".booking__btn");

book.addEventListener("click", () => {
  alert(
    "Your reservation is succesfully confirmed, we will wait you on this date"
  );
});

//! modal popup in subscribe section

const modal = document.querySelector(".subscribe__modal");
const emailBtn = document.querySelector(".subscribe__email--btn");
const cancelBtn = document.querySelector(".cancel");

emailBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

cancelBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

cancel.addEventListener("click", ()=>{
  if(!modal.style.display == 'none'){
  modal.classList.remove("hidden")
  }
  else{
    modal.classList.add("hidden")
  }
})

function sendEmail() {
  emailjs.send("service_9wz0vz1", "template_rt3rn1k", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      // function sendMsg(){
      //   alert("Your email was sent")
      // }
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
