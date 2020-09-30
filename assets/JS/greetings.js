const userInfoForm = document.querySelector(".js-userinfo");
const userName = document.querySelector(".js-userinfo input");
const greetings = document.querySelector(".js-greetings");
const USER_LS = "currentUser";

const saveName = (currentUser) => {
  localStorage.setItem(USER_LS, currentUser);
};

const getName = () => {
  userInfoForm.classList.add("visible");
  userInfoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const currentUser = userName.value;
    saveName(currentUser);
    greetUser(currentUser);
  });
};

const loadName = () => {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    getName();
  } else {
    greetUser(currentUser);
  }
};

loadName();
