const clockTime = document.querySelector(".js-time");

const getTime = setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clockTime.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);
