window.onload = function () {
  stopLoader();
};


const desc = document.querySelector(".knife__about--desc")
const more = document.querySelector(".knife__about--more")
const btn = document.querySelector("knife__about--btn")


btn.addEventListener("click", ()=>{
    btn.style.color = "red"
})
//   }
//   else{
//     more.style.display = "inline"
//     btn.innerHTML = "Read Less"
//   }
// })

