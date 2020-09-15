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
  console.log(firstSlide);
});
