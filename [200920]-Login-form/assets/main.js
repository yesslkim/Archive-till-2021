const loginButton = document.querySelector(".login-btn");
const loginDisplay = document.querySelector(".login-wrap");
const loginForm = document.querySelector(".login-form");

loginButton.addEventListener("click", () => {
  loginDisplay.classList.remove("hidden");
});
