const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");
const sliders = document.querySelectorAll(".gallery__img--sliders--slider");
const buttons = [nextBtn, prevBtn];
// let currentSlide = 0;
// let lastSlide = sliders.length - 1;




let active = 0;

nextBtn.addEventListener("click", ()=>{
sliders[active].classList.remove("show");
active++;
if(active>sliders.length-1){
    active=0
}
sliders[active].classList.add("show");
})
prevBtn.addEventListener("click", ()=>{
    sliders[active].classList.remove("show");
    active--;
    if(active < 0){
        active = sliders.length-1;
    }
    sliders[active].classList.add("show"); 
})
