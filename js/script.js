$(document).ready(function () {
  $("#current-weather-btn").click(function () {
    $("#city-search-section").hide();
    $("#current-weather-section").show();
    fetchWeatherForCurrentLocation();
  });

  $("#search-weather-btn").click(function () {
    $("#current-weather-section").hide();
    $("#city-search-section").show();
    $("#city-weather-content").hide();
  });

  function fetchWeatherForCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetchForecastData(lat, lon, "#hourly-forecast");
      });
    }
  }

  function fetchForecastData(lat, lon, containerId) {
    const apiKey = "TU_API_KEY";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}&lang=es`;

    $.ajax({
      url: apiUrl,
      method: "GET",
      success: function (data) {
        $("#location-name").text(`${data.city.name}, ${data.city.country}`);
        displayDailyForecast(data.list, containerId);
      },
      error: function () {
        alert("Error al obtener los datos del clima.");
      },
    });
  }

  $("#search-btn").click(function () {
    const city = $("#city-input").val();
    fetchCityWeather(city);
  });

  function fetchCityWeather(city) {
    const apiKey = "bf99cd895b793ffe57120e9b3f5473a2";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}&lang=es`;

    $.ajax({
      url: apiUrl,
      method: "GET",
      success: function (data) {
        $("#searched-city-name").text(data.city.name);
        displayDailyForecast(data.list, "#searched-hourly-forecast");
        $("#city-weather-content").show();
      },
      error: function () {
        alert("Error al obtener los datos del clima.");
      },
    });
  }

  function getWeatherIcon(weatherCondition) {
    switch (weatherCondition) {
      case "Clear":
        return "bi-sun";
      case "Clouds":
        return "bi-cloud-sun";
      case "Rain":
        return "bi-cloud-rain";
      case "Snow":
        return "bi-snow";
      case "Fog":
        return "bi-cloud-fog";
      default:
        return "bi-cloud";
    }
  }

  function displayDailyForecast(forecastList, containerId) {
    $(containerId).empty();
    let dailyForecast = {};
    const today = new Date().toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "short" });

    forecastList.forEach((forecast) => {
      const date = new Date(forecast.dt * 1000);
      const day = date.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "short" });
      const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      if (!dailyForecast[day]) {
        dailyForecast[day] = [];
      }

      if (day === today || date > new Date()) {
        dailyForecast[day].push({
          time: time,
          temp: Math.round(forecast.main.temp),
          description: forecast.weather[0].description,
          icon: getWeatherIcon(forecast.weather[0].main)
        });
      }
    });

    for (const day in dailyForecast) {
      const dayCard = `
        <div class="day-card">
          <div class="day-title">${day}</div>
          <div class="hourly-forecast">
            ${dailyForecast[day].map(forecast => `
              <div class="forecast-card">
                <div class="forecast-time">${forecast.time}</div>
                <div class="forecast-icon">
                  <i class="bi ${forecast.icon}"></i>
                </div>
                <div class="forecast-temp">${forecast.temp}°C</div>
                <div class="forecast-description">${forecast.description}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      $(containerId).append(dayCard);
    }
  }
});

