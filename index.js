const slider = document.querySelector(".slider:first-child");

function slide() {
    if (slider) {
        const currentSlider = document.querySelector(".showing");
        const nextSlider = currentSlider.nextElementSibling;

        if (nextSlider) {
            currentSlider.classList.remove("showing");
            nextSlider.classList.add("showing");
        }
        if (!nextSlider) {
            currentSlider.classList.remove("showing");
            slider.classList.add("showing");
        }
    } else {
        slider.classList.add("showing");
    }
}

setInterval(slide, 3000);

const sliders = document.querySelectorAll(".sliders > img");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let current = 0;

function showSlider(n) {
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].style.display = "none";
    }
    sliders[n].style.display = "block";
}

function prevSlide() {
    if (current > 0) current -= 1;
    else current = sliders.length - 1;
    showSlider(current);
}

function nextSlide() {
    if (current < sliders.length - 1) current += 1;
    else current = 0;
    showSlider(current);
}

prev.onclick = prevSlide;
next.onclick = nextSlide;
