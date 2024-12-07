async function renderWeather(container) {
    container.innerHTML = `<p>Loading weather data...</p>`;

    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=43.7&longitude=-79.42&hourly=temperature_2m&temperature_unit=celsius');
        const weatherData = await response.json();

        const labels = weatherData.hourly.time.slice(0, 5);
        const temps = weatherData.hourly.temperature_2m.slice(0, 5);

        container.innerHTML = `
            <section class="weather">
                <h2>5-Hour Weather Forecast for Toronto, Ontario, Canada, using free Open-Meteo API</h2>
                <canvas id="weatherChart"></canvas>
            </section>
        `;

        const ctx = document.getElementById('weatherChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels,
                datasets: [{
                    label: 'Temperature (°C)',
                    data: temps,
                    borderColor: 'blue',
                    fill: false
                }]
            }
        });
    } catch (error) {
        container.innerHTML = `<p>Error loading weather data.</p>`;
    }
}

renderWeather(document.getElementById('app'));
