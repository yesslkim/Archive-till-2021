const userInfoForm = document.querySelector(".js-userinfo");
const userName = document.querySelector(".js-userinfo input");
const greetings = document.querySelector(".js-greetings");
const USER_LS = "currentUser";

const loadName = () => {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    getName();
  } else {
    greetUser(currentUser);
  }
};

loadName();
