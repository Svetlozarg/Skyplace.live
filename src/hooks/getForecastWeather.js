import { reactive, watch } from 'vue';
import fetchWeatherForecast from '../lib/forecast_API';
import fetchWeather from '../lib/API';

export default function getWeatherForecast(cityName) {
  const weatherForecastObj = reactive({
    loading: false,
    error: '',
    data: [],
    lat: 0,
    lon: 0,
  });

  async function loadWeather() {
    try {
      weatherForecastObj.error = '';
      weatherForecastObj.data = [];
      weatherForecastObj.data = await fetchWeather(cityName);
      weatherForecastObj.lat = weatherForecastObj.data.coord.lat;
      weatherForecastObj.lon = weatherForecastObj.data.coord.lon;
      weatherForecastObj.data = await fetchWeatherForecast(weatherForecastObj.data.coord.lat, weatherForecastObj.data.coord.lon);
    } catch (error) {
      weatherForecastObj.error = error.message || 'Error loading weather';
    }
  }

  let debouceTimeout;

  watch(() => cityName, () => {
    clearTimeout(debouceTimeout);
    weatherForecastObj.loading = true;
    debouceTimeout = setTimeout(() => {
      loadWeather();
      weatherForecastObj.loading = false;
    }, 500);
  }, { immediate: true });

  return weatherForecastObj;
}