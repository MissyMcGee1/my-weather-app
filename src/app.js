let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let day = days[now.getDay()];
let month = months[now.getMonth()];
let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let dateNow = document.querySelector("#date");
dateNow.innerHTML = `${day} ${month} ${date} <br> ${hours}: ${minutes}`;

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");
  let days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
  ];

  let forecastHTML = `<div class="row">`;

  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
    <div class="col-2">
      <img src="images/partlysunny.png" alt="" width="42" />
        <div class="weather-forecast-date">${day}</div>
        <div class="weather-forecast-temp">
          <span class="weather-forecast-temp-max">18°</span>
          <span class="weather-forecast-temp-min">12°</span>
      </div>
    </div>
  `;
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let highElement = document.querySelector("#high");
  let lowElement = document.querySelector("#low");
  let windElement = document.querySelector("#wind-speed");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  highElement.innerHTML = Math.round(response.data.main.temp_max);
  lowElement.innerHTML = Math.round(response.data.main.temp_min);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  searchCity(cityInputElement.value);
}

function searchCity(city) {
  let apiKey = "3b5f3e51ce51ffad1f79b84acf0944ed";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

searchCity("Christchurch");
displayForecast();
