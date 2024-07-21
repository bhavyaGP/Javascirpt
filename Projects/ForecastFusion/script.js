document.getElementById('search-btn').addEventListener('click', fetchWeather);

async function fetchWeather() {
    const city = document.getElementById('city-input').value;
    if (!city) return;

    const apiKey = 'your_api_key';
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=${apiKey}&units=metric`;

    try {
        const [currentResponse, forecastResponse] = await Promise.all([
            fetch(currentWeatherUrl),
            fetch(forecastUrl)
        ]);

        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();

        updateCurrentWeather(currentData);
        updateForecast(forecastData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateCurrentWeather(data) {
    const weatherDetails = document.getElementById('current-weather-details');
    weatherDetails.innerHTML = `
        <div>
            <h3>${data.name}</h3>
            <p>${data.weather[0].description}</p>
            <p>${data.main.temp} °C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        </div>
    `;
}

function updateForecast(data) {
    const forecastContainer = document.getElementById('forecast-container');
    forecastContainer.innerHTML = '';

    data.list.forEach(day => {
        const forecastDiv = document.createElement('div');
        forecastDiv.innerHTML = `
            <h4>${new Date(day.dt * 1000).toLocaleDateString()}</h4>
            <p>${day.weather[0].description}</p>
            <p>${day.temp.day} °C</p>
        `;
        forecastContainer.appendChild(forecastDiv);
    });
}
