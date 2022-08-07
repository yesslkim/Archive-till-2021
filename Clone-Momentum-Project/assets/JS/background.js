const getBackground = () => {
  const getRandomBg = Math.floor(Math.random() * 10);
  const backgroundImage = new Image();
  backgroundImage.src = `./assets/image/${getRandomBg + 1}.jpg`;
  backgroundImage.classList.add("background-image");
  document.body.prepend(backgroundImage);
};

getBackground();
