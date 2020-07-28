"use strict";
const buttonPrev = document.querySelector(".slider__arrow_prev");
const buttonNext = document.querySelector(".slider__arrow_next");
const sliderItems = Array.from(document.getElementsByClassName("slider__item"));
const sliderDots = Array.from(document.getElementsByClassName("slider__dot"));
const sumImg = sliderItems.length;
let current = 0;
sliderDots[current].classList.add("slider__dot_active");

buttonNext.onclick = () => {
  nextSlide();
};

buttonPrev.onclick = () => {
  prevSlide();
};

for (let i = 0; i < sumImg; i++) {
  sliderDots[i].onclick = () => {
  	current = i;
    showSlide(current);
  };
}

const showSlide = (current) => {
  sliderItems[sliderItems.findIndex(el => el.classList.contains("slider__item_active"))].classList.remove("slider__item_active");
  sliderDots[sliderDots.findIndex(el => el.classList.contains("slider__dot_active"))].classList.remove("slider__dot_active");
  sliderItems[current].classList.add("slider__item_active");
  sliderDots[current].classList.add("slider__dot_active");
};

const nextSlide = () => {
  current++;
  if (current == sumImg) {
    current = 0;
  }
  showSlide(current);

};

const prevSlide = () => {
  if (current == 0) {
    current = sumImg - 1;
  } else {
    current--;
  }
  showSlide(current);

};
