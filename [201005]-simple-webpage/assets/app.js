// menu event
const header = document.querySelector(".header");
const gnbSub = document.querySelector(".gnb-subarea");

header.addEventListener("mouseover", e => {
  if (e.target.tagName === "A" || e.target.classList.contains("gnb-subarea")) {
    gnbSub.classList.add("fade-in");
  } else {
    gnbSub.classList.remove("fade-in");
  }
});

header.addEventListener("mouseout", e => {
  if (e.target.tagName === "A" || e.target.classList.contains("gnb-subarea")) {
    gnbSub.classList.remove("fade-in");
  } else {
    gnbSub.classList.add("fade-in");
  }
});

// img slide event
const images = document.querySelectorAll(".img-slides img");
console.log(images);
let num = 0;

setInterval(() => {
  images[num].classList.add("on");
  num++;
  if (num === 3) {
    num = 0;
    images.forEach(image => {
      image.classList.remove("on");
    });
  }
}, (num + 1) * 2000);

const popuplink = document.querySelector(".notice a");
const popup = document.querySelector(".popup-wrap");
const close = document.querySelector(".close-btn");

popuplink.addEventListener("click", () => {
  popup.style.display = "block";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});
