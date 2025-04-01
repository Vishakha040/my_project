
const apiKey = 'your_api_key_here';  // Replace with your own API key from OpenWeatherMap
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert("Please enter a city.");
        return;
    }

    const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert("City not found.");
            return;
        }

        // Display the weather data
        document.getElementById('city-name').textContent = `Weather in ${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').textContent = `${data.main.temp}°C`;
        document.getElementById('description').textContent = data.weather[0].description;

        // Show weather container
        document.getElementById('weather-container').style.display = 'block';
    } catch (error) {
        alert("Error fetching data. Please try again.");
    }
}
