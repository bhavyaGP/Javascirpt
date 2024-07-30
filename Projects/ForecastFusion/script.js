const button = document.getElementById("search-btn");
const input = document.getElementById("city-input");
const display = document.getElementById("current-weather-details");

async function getdata(city) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=feb655ebe37d4a84bcd162237242107&q=${city}&aqi=yes`
  );
  return await promise.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  if (value) {
    const data = await getdata(value);
    displayWeather(data);
  }
});

function displayWeather(data) {
  display.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">${data.location.name}, ${data.location.region}, ${data.location.country}</h3>
                <p class="card-text"><strong>Condition:</strong> ${data.current.condition.text}</p>
                <p class="card-text"><strong>Temperature:</strong> ${data.current.temp_c} °C</p>
                <p class="card-text"><strong>Feels Like:</strong> ${data.current.feelslike_c} °C</p>
                <p class="card-text"><strong>Humidity:</strong> ${data.current.humidity}%</p>
                <p class="card-text"><strong>Wind Speed:</strong> ${data.current.wind_kph} kph</p>
                <p class="card-text"><strong>Wind Direction:</strong> ${data.current.wind_dir}</p>
                <img class="weather-icon" src="https:${data.current.condition.icon}" alt="Weather icon">
            </div>
        </div>
    `;
}
