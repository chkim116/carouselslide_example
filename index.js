// slide

const slider = document.querySelector(".slider:first-child");
const sliderList = document.querySelectorAll(".slider");
const sliderDotBtn = document.querySelectorAll(".slider-dot");
const sliderDot = document.querySelector(".slider-dot:first-child");

function nextSlide() {
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

// dot slide

function nextDot() {
    if (sliderDot) {
        const currentDot = document.querySelector(".active");
        const nextDot = currentDot.nextElementSibling;

        if (nextDot) {
            currentDot.classList.remove("active");
            nextDot.classList.add("active");
        }
        if (!nextDot) {
            currentDot.classList.remove("active");
            sliderDot.classList.add("active");
        }
    } else {
        sliderDot.classList.add("active");
    }
}

function handleSlider(e) {
    const { dot } = e.target.dataset;
    const currentSlider = document.querySelector(".showing");
    const currentDot = document.querySelector(".active");

    if (currentSlider && currentDot) {
        sliderList.forEach((slide) => {
            if (dot === slide.dataset.slide) {
                currentDot.classList.remove("active");
                currentSlider.classList.remove("showing");
                slide.classList.add("showing");
                e.target.classList.add("active");
            }
        });
    }
}

sliderDotBtn.forEach((btn) => btn.addEventListener("click", handleSlider));

// btn slide

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

function prevSlideBtn() {
    if (current > 0) current -= 1;
    else current = sliders.length - 1;
    showSlider(current);
}

function nextSlideBtn() {
    if (current < sliders.length - 1) current += 1;
    else current = 0;
    showSlider(current);
}

function init() {
    setInterval(nextSlide, 4000);
    setInterval(nextDot, 4000);
    prev.onclick = prevSlideBtn;
    next.onclick = nextSlideBtn;
}
