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
    showSlide(i);
  };
}

const showSlide = (current) => {
  document.querySelector(".slider__item_active").classList.remove("slider__item_active");
  document.querySelector(".slider__dot_active").classList.remove("slider__dot_active");
  sliderItems[current].classList.add("slider__item_active");
  sliderDots[current].classList.add("slider__dot_active");
};

const nextSlide = () => {
  current++;
  if (current == sumImg) {
    current = 0;
  }
  sliderItems[current].classList.add("slider__item_active");
  sliderDots[current].classList.add("slider__dot_active");
  if (current == 0) {
    sliderItems[sumImg - 1].classList.remove("slider__item_active");
    sliderDots[sumImg - 1].classList.remove("slider__dot_active");
  } else {
    sliderItems[current - 1].classList.remove("slider__item_active");
    sliderDots[current - 1].classList.remove("slider__dot_active");
  }
};

const prevSlide = () => {
  if (current == 0) {
    current = sumImg - 1;
  } else {
    current--;
  }
  sliderItems[current].classList.add("slider__item_active");
  sliderDots[current].classList.add("slider__dot_active");
  if (current == sumImg - 1) {
    sliderItems[0].classList.remove("slider__item_active");
    sliderDots[0].classList.remove("slider__dot_active");
  } else {
    sliderItems[current + 1].classList.remove("slider__item_active");
    sliderDots[current + 1].classList.remove("slider__dot_active");
  }
};
