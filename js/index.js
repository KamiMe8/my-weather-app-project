// Displaying user location data when page is loaded or when icon is clicked

function formatTime(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return `${hours}:${minutes}`;
}

function showCurrentLocation(response) {
  let todayCity = document.querySelector(".weather-today-city");
  let fiveDaysCity = document.querySelector(".city-name");
  todayCity.innerHTML = response.data.name;
  fiveDaysCity.innerHTML = response.data.name;
  let roundTemperature = Math.round(response.data.main.temp);
  let currentTemperature = document.querySelector(".current-temperature");
  currentTemperature.innerHTML = `${roundTemperature}°C`;
  let maxTemperature = Math.round(response.data.main.temp_max);
  let minTemperature = Math.round(response.data.main.temp_min);
  let todayMaxTemperature = document.querySelector("#today-max-temperature");
  let todayMinTemperature = document.querySelector("#today-min-temperature");
  todayMaxTemperature.innerHTML = `${maxTemperature}°C`;
  todayMinTemperature.innerHTML = `${minTemperature}°C`;
  let sunriseTime = document.querySelector(".sunrise-time");
  let sunsetTime = document.querySelector(".sunset-time");
  sunriseTime.innerHTML = formatTime(response.data.sys.sunrise * 1000);
  sunsetTime.innerHTML = formatTime(response.data.sys.sunset * 1000);
}

function getCurrentLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "7e374620865677a5a3e5572e7037e87e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentLocation);
}

function getLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getCurrentLocation);
}

let positionButton = document.querySelector(".current-location-icon");
positionButton.addEventListener("click", getLocation);
window.addEventListener("load", getLocation);

// Displaying city name and temperature when search input is submitted

function showTemperature(response) {
  let roundTemperature = Math.round(response.data.main.temp);
  let currentTemperature = document.querySelector(".current-temperature");
  currentTemperature.innerHTML = `${roundTemperature}°C`;
  let maxTemperature = Math.round(response.data.main.temp_max);
  let minTemperature = Math.round(response.data.main.temp_min);
  let todayMaxTemperature = document.querySelector("#today-max-temperature");
  let todayMinTemperature = document.querySelector("#today-min-temperature");
  todayMaxTemperature.innerHTML = `${maxTemperature}°C`;
  todayMinTemperature.innerHTML = `${minTemperature}°C`;
}

function changeCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-pannel").value;
  let todayCity = document.querySelector(".weather-today-city");
  let fiveDaysCity = document.querySelector(".city-name");
  todayCity.innerHTML = searchInput;
  fiveDaysCity.innerHTML = searchInput;
  if (searchInput.length === 0) {
    alert("Please, enter the city name!");
  }
  let apiKey = "7e374620865677a5a3e5572e7037e87e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let searchEngine = document.querySelector(".search-wrapper");
searchEngine.addEventListener("submit", changeCity);

// Day, date, month, current time TODAY BLOCK

let currentDate = new Date();

let monthsCut = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let daysFull = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let date = document.querySelector(".month-date");
date.innerHTML = `${
  monthsCut[currentDate.getMonth()]
} ${currentDate.getDate()}`;

let dayFull = document.querySelector(".day");
dayFull.innerHTML = daysFull[currentDate.getDay()];

function updateTime() {
  let currentDate = new Date();
  let currentTime = document.querySelector(".time");
  let hour = currentDate.getHours();
  hour = hour < 10 ? "0" + hour : hour;
  let minute = currentDate.getMinutes();
  minute = minute < 10 ? "0" + minute : minute;
  let second = currentDate.getSeconds();
  second = second < 10 ? "0" + second : second;
  currentTime.innerHTML = `${hour}:${minute}:${second}`;
}
updateTime();
setInterval(updateTime, 1000);

// SUNSET AND SUNRISE TIME

// RANDOM QUOTE GENERATION

// FIVE DAYS BLOCK: day, date
