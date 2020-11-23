import { reactive, watch } from 'vue';
import fetchWeather from '../lib/API';

export default function getWeather(cityName) {
  const weatherObj = reactive({
    loading: false,
    error: '',
    data: [],
  });

  async function loadWeather() {
    try {
      weatherObj.error = '';
      weatherObj.data = [];
      weatherObj.data = await fetchWeather(cityName);
    } catch (error) {
      weatherObj.error = error.message || 'Error loading weather';
    }
  }

  let debouceTimeout;

  watch(() => cityName, () => {
    clearTimeout(debouceTimeout);
    weatherObj.loading = true;
    debouceTimeout = setTimeout(() => {
      loadWeather();
      weatherObj.loading = false;
    }, 500);
  }, { immediate: true });

  return weatherObj;
}
