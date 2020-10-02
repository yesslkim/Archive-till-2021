const COORDS = "coords";

const handleGeoSuccess = position => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const CoordsObj = {
    latitude,
    longitude,
  };
  saveGeolocation(CoordsObj);
};

const handleGeoError = error => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(`ERROR CODE : ${errorCode}, ERROR MESSAGE : ${errorMessage}`);
};

const getGeolocation = () => {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
};

const loadGeolocation = () => {
  const currentCoords = localStorage.getItem(COORDS);

  if (currentCoords === null) {
    getGeolocation();
  } else {
    getWeatherInfo();
  }
};

loadGeolocation();
