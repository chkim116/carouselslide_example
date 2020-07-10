const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slider:first-child");

function slide () {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if (currentSlide) {
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
        if (nextSlide) {
            nextSlide.classList.add(SHOWING_CLASS);
        } else {
            firstSlide.classList.add(SHOWING_CLASS);
        }
    }  else {
            firstSlide.classList.add(SHOWING_CLASS);
    
        }
    }
slide();
setInterval(slide, 3000);

const sliders = document.querySelectorAll('.sliders > img');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');


let current = 0;


function showSlider(n) {
    for (let i=0; i < sliders.length; i++) {
        sliders[i].style.display = 'none';
    }
    sliders[n].style.display = 'block';
}

function prevSlide() {
    if (current >0) current -= 1;
    else current = sliders.length -1;
    showSlider(current);
}

function nextSlide () {
    if (current < sliders.length-1) current +=1;
    else current = 0;
    showSlider(current);
}

showSlider(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;