const body = document.querySelector("body");
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
let activeImage = 0;
rightBtn.addEventListener("click", () => {
  if (activeImage != slides.length - 1) {
    slides[activeImage].classList.remove("active");
    slides[activeImage + 1].classList.add("active");
    body.style.backgroundImage = slides[activeImage + 1].style.backgroundImage;
    activeImage = activeImage + 1;
  } else {
    slides[activeImage].classList.remove("active");
    activeImage = 0;
    slides[activeImage].classList.add("active");
    body.style.backgroundImage = slides[activeImage].style.backgroundImage;
  }
});
leftBtn.addEventListener("click", () => {
  if (activeImage != 0) {
    slides[activeImage].classList.remove("active");
    slides[activeImage - 1].classList.add("active");
    body.style.backgroundImage = slides[activeImage - 1].style.backgroundImage;
    activeImage = activeImage - 1;
  } else {
    slides[activeImage].classList.remove("active");
    activeImage = slides.length - 1;
    slides[activeImage].classList.add("active");
    body.style.backgroundImage = slides[activeImage].style.backgroundImage;
  }
});
