export default async function fetchWeather(cityName) {
  const API_KEY = '24b55a0d31357be39369b21ab02a7d3b';
  const URL_BASE = 'https://api.openweathermap.org/data/2.5/';
  const response = await fetch(`${URL_BASE}weather?q=${cityName}&units=metric&APPID=${API_KEY}`, {
    headers: {
      Accept: 'application/json',
    },
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  }

  const error = new Error('City not found');
  throw error;
}
