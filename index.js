const watchWeather = function (data) {
    const html = `
        <article>
            <h3>Weather in ${data.name}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Pressure: ${data.main.pressure} hPa</p>
            <p>Description: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind speed: ${data.wind.speed} m/s</p>
            <p>Wind direction: ${data.wind.deg}°</p>
            <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather icon">
        </article>
    `;
    document.querySelector('#weather-info').innerHTML = html;
};

const getWeather = function (city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            watchWeather(data);
        })
        .catch(error => console.error(error));
};

getWeather('DNIPRO');
