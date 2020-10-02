const COORDS = "coords";

const loadGeolocation = () => {
  const currentCoords = localStorage.getItem(COORDS);

  if (currentCoords === null) {
    getGeolocation();
  } else {
    getWeatherInfo();
  }
};

loadGeolocation();
