function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let highElement = document.querySelector("#high");
  let lowElement = document.querySelector("#low");
  let humidityElement = document.querySelector("#humidity");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  highElement.innerHTML = Math.round(response.data.main.temp_max);
  lowElement.innerHTML = Math.round(response.data.main.temp_min);
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
}

let apiKey = "f27f74487839d0a5db5e847ad1689803";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Christchurch&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
