const clockTime = document.querySelector(".js-time");

const getTime = setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clockTime.textContent = `${hours < 10 ? `0${hours}` : hours}: ${
    minutes < 10 ? `0${minutes}` : minutes
  } : ${seconds < 10 ? `0${seconds}` : seconds}`;
}, 1000);
