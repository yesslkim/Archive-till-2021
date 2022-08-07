const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const slideContainer = document.querySelector(".image-slides");
const slides = document.querySelectorAll(".slide");

prevButton.addEventListener("click", () => {
  slideContainer.append(slideContainer.firstElementChild);
  slides.forEach((slide) => {
    slide.classList.add("hidden");
  });
  slideContainer.firstElementChild.classList.remove("hidden");
});

nextButton.addEventListener("click", () => {
  slideContainer.prepend(slideContainer.lastElementChild);
  slides.forEach((slide, index) => {
    slide.classList.add("hidden");
  });
  slideContainer.firstElementChild.classList.remove("hidden");
});

// 자동 이미지 슬라이드

/*
  const slideLength = slideContainer.children.length;
  const firstSlide = slideContainer.children[0];
  let position = 0;
  setInterval(() => {
    position = (position + 1) % slideLength;

    firstSlide.style.marginRight = `${-position * 500}px`;
  }, 1500);

*/
