const openPopUp = document.querySelector(".pop-up-btn");
const popUp = document.querySelector(".pop-up-wrapper");
const closePopUp = document.querySelector(".pop-up-close");

openPopUp.addEventListener("click", () => {
  popUp.style.display = "block";
});

closePopUp.addEventListener("click", () => {
  popUp.style.display = "none";
});

popUp.addEventListener("click", () => {
  popUp.style.display = "none";
});
