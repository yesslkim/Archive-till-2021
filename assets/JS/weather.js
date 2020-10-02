const API_KEY = "814b19184670cb5bcae98fd0fa78b1ee";
const weatherInfo = document.querySelector(".js-weather");
const COORDS = "coords";

const getWeatherInfo = (latitude, longitude) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      const temperature = data.main.temp;
      const place = data.name;

      weatherInfo.textContent += ` ${place} ${temperature}°C`;
    })
    .catch(error => {
      weatherInfo.textContent = null;
    });
};

const saveGeolocation = Coords => {
  localStorage.setItem(COORDS, JSON.stringify(Coords));
};

const handleGeoSuccess = position => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const CoordsObj = {
    latitude,
    longitude,
  };
  saveGeolocation(CoordsObj);
  getWeatherInfo(latitude, longitude);
};

const handleGeoError = error => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(`ERROR CODE : ${errorCode}, ERROR MESSAGE : ${errorMessage}`);
  if (errorCode < 3) {
    alert("현재 위치와 날씨 정보를 이용하려면 설정정보를 확인해주세요");
  }
};

const getGeolocation = () => {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
};

const loadGeolocation = () => {
  const currentCoords = localStorage.getItem(COORDS);

  if (currentCoords === null) {
    getGeolocation();
  } else {
    const parsedCoords = JSON.parse(currentCoords);
    getWeatherInfo(parsedCoords.latitude, parsedCoords.longitude);
  }
};

loadGeolocation();
