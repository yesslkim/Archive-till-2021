const loginButton = document.querySelector(".login-btn");
const loginDisplay = document.querySelector(".login-wrap");
const loginForm = document.querySelector(".login-form");

loginButton.addEventListener("click", () => {
  loginDisplay.classList.remove("hidden");
});

loginForm.addEventListener("click", (e) => {
  const targetClass = e.target.className;
  if (targetClass === "close-btn" || targetClass === "cancel-btn") {
    loginDisplay.classList.add("hidden");
  }
});
