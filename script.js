
async function getWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = '5933bfceb6ace833dd2eae2fbea1fc98'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather-result').innerHTML = `<div>${error.message}</div>`;
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weather-result');
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const cityName = data.name;
    const country = data.sys.country;

    weatherResult.innerHTML = `
        <div><strong>${cityName}, ${country}</strong></div>
        <div>Temperature: ${temperature}°C</div>
        <div>Condition: ${weatherDescription}</div>
    `;
}
