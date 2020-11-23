/* eslint-disable consistent-return */

const now = new Date().getHours();

function getIcon(weather) {
  // clear sky
  if (weather.data.weather[0].main === 'Clear') {
    return 'https://bmcdn.nl/assets/weather-icons/all/clear-night.svg';
  } if (weather.data.weather[0].main === 'Clear' && now > 7 && now < 18) {
    return 'https://bmcdn.nl/assets/weather-icons/all/clear-day.svg';
  }
  // Clouds
  if (weather.data.weather[0].description === 'few clouds' && now > 7 && now < 18) {
    return 'https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-day.svg';
  } if (weather.data.weather[0].description === 'few clouds') {
    return 'https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-night.svg';
  } if (weather.data.weather[0].description === 'scattered clouds') {
    return 'https://bmcdn.nl/assets/weather-icons/all/cloudy.svg';
  } if (weather.data.weather[0].description === 'broken clouds') {
    return 'https://bmcdn.nl/assets/weather-icons/all/cloudy.svg';
  } if (weather.data.weather[0].description === 'overcast clouds') {
    return 'https://bmcdn.nl/assets/weather-icons/all/cloudy.svg';
  }
  // Rain
  if (weather.data.weather[0].main === 'Rain') {
    return 'https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-day-rain.svg';
  } if (weather.data.weather[0].main === 'Rain' && now < 7 && now > 18) {
    return 'https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-night-rain.svg';
  } if (weather.data.weather[0].description === 'light rain') {
    return 'https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-day-rain.svg';
  } if (weather.data.weather[0].description === 'moderate rain') {
    return 'https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-day-rain.svg';
  } if (weather.data.weather[0].description === 'heavy intensity rain') {
    return 'https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-day-rain.svg';
  } if (weather.data.weather[0].description === 'very heavy rain') {
    return 'https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-day-rain.svg';
  } if (weather.data.weather[0].description === 'extreme rain') {
    return 'https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-day-rain.svg';
  } if (weather.data.weather[0].description === 'freezing rain') {
    return 'https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-day-hail.svg';
  } if (weather.data.weather[0].description === 'light intensity shower rain') {
    return 'https://bmcdn.nl/assets/weather-icons/all/rain.svg';
  } if (weather.data.weather[0].description === 'shower rain') {
    return 'https://bmcdn.nl/assets/weather-icons/all/rain.svg';
  } if (weather.data.weather[0].description === 'heavy intensity shower rain') {
    return 'https://bmcdn.nl/assets/weather-icons/all/rain.svg';
  } if (weather.data.weather[0].description === 'ragged shower rain') {
    return 'https://bmcdn.nl/assets/weather-icons/all/rain.svg';
  }
  // Snow
  if (weather.data.weather[0].description === 'Snow') {
    return 'https://bmcdn.nl/assets/weather-icons/all/snow.svg';
  }
  // Drizzle
  if (weather.data.weather[0].main === 'Drizzle') {
    return 'https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-day-drizzle.svg';
  } if (weather.data.weather[0].main === 'Drizzle' && now < 7 && now > 18) {
    return 'https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-night-drizzle.svg';
  }
  // Thunderstorm
  if (weather.data.weather[0].main === 'Thunderstorm') {
    return 'https://bmcdn.nl/assets/weather-icons/all/thunderstorms.svg';
  } 
  // Atmosphere
  if (weather.data.weather[0].main === 'Sand') {
    return 'https://bmcdn.nl/assets/weather-icons/all/mist.svg';
  } if (weather.data.weather[0].main === 'Dust') {
    return 'https://bmcdn.nl/assets/weather-icons/all/mist.svg';
  } if (weather.data.weather[0].main === 'Ash') {
    return 'https://bmcdn.nl/assets/weather-icons/all/mist.svg';
  }if (weather.data.weather[0].main === 'Squall') {
    return 'https://bmcdn.nl/assets/weather-icons/all/mist.svg';
  } if (weather.data.weather[0].main === 'Tornado') {
    return 'https://bmcdn.nl/assets/weather-icons/all/tornado.svg';
  } if (weather.data.weather[0].main === 'Mist') {
    return 'https://bmcdn.nl/assets/weather-icons/all/mist.svg';
  } if (weather.data.weather[0].main === 'Smoke') {
    return 'https://bmcdn.nl/assets/weather-icons/all/mist.svg';
  } if (weather.data.weather[0].main === 'Haze') {
    return 'https://bmcdn.nl/assets/weather-icons/all/mist.svg';
  } if (weather.data.weather[0].main === 'Dust') {
    return 'https://bmcdn.nl/assets/weather-icons/all/mist.svg';
  } if (weather.data.weather[0].main === 'Fog') {
    return 'https://bmcdn.nl/assets/weather-icons/all/mist.svg';
  } 
}

function getWeatherIcon(description) {
  // Sun
  if (description === 'clear sky') {
    return 'https://bmcdn.nl/assets/weather-icons/all/clear-day.svg';
  }
  // Clouds
  if (description === 'few clouds') {
    return 'https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-day.svg';
  } if (description === 'scattered clouds') {
    return 'https://bmcdn.nl/assets/weather-icons/all/cloudy.svg';
  } if (description === 'broken clouds') {
    return 'https://bmcdn.nl/assets/weather-icons/all/cloudy.svg';
  } if (description === 'overcast clouds') {
    return 'https://bmcdn.nl/assets/weather-icons/all/cloudy.svg';
  }
  // Rain
  if (description === 'light rain') {
    return 'https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-day-rain.svg';
  } if (description === 'moderate rain') {
    return 'https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-day-rain.svg';
  } if (description === 'heavy intensity rain') {
    return 'https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-day-rain.svg';
  } if (description === 'very heavy rain') {
    return 'https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-day-rain.svg';
  } if (description === 'extreme rain') {
    return 'https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-day-rain.svg';
  } if (description === 'freezing rain') {
    return 'https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-day-hail.svg';
  } if (description === 'light intensity shower rain') {
    return 'https://bmcdn.nl/assets/weather-icons/all/rain.svg';
  } if (description === 'shower rain') {
    return 'https://bmcdn.nl/assets/weather-icons/all/rain.svg';
  } if (description === 'heavy intensity shower rain') {
    return 'https://bmcdn.nl/assets/weather-icons/all/rain.svg';
  } if (description === 'ragged shower rain') {
    return 'https://bmcdn.nl/assets/weather-icons/all/rain.svg';
  }
  // Snow
  if (description === 'Snow') {
    return 'https://bmcdn.nl/assets/weather-icons/all/snow.svg';
  }
  // Drizzle
  if (description === 'Drizzle') {
    return 'https://bmcdn.nl/assets/weather-icons/all/partly-cloudy-day-drizzle.svg';
  }
  // Thunderstorm
  if (description === 'Thunderstorm') {
    return 'https://bmcdn.nl/assets/weather-icons/all/thunderstorms.svg';
  } 
  // Atmosphere
  if (description === 'Sand') {
    return 'https://bmcdn.nl/assets/weather-icons/all/mist.svg';
  } if (description === 'Dust') {
    return 'https://bmcdn.nl/assets/weather-icons/all/mist.svg';
  } if (description === 'Ash') {
    return 'https://bmcdn.nl/assets/weather-icons/all/mist.svg';
  }if (description === 'Squall') {
    return 'https://bmcdn.nl/assets/weather-icons/all/mist.svg';
  } if (description === 'Tornado') {
    return 'https://bmcdn.nl/assets/weather-icons/all/tornado.svg';
  } if (description === 'Mist') {
    return 'https://bmcdn.nl/assets/weather-icons/all/mist.svg';
  } if (description === 'Smoke') {
    return 'https://bmcdn.nl/assets/weather-icons/all/mist.svg';
  } if (description === 'Haze') {
    return 'https://bmcdn.nl/assets/weather-icons/all/mist.svg';
  } if (description === 'Dust') {
    return 'https://bmcdn.nl/assets/weather-icons/all/mist.svg';
  } if (description === 'Fog') {
    return 'https://bmcdn.nl/assets/weather-icons/all/mist.svg';
  } 
}

function getIconTemp(weather) {
  if (Math.round(weather.data.main.temp) < 5) {
    return 'https://www.flaticon.com/svg/static/icons/svg/1163/1163665.svg';
  } if (Math.round(weather.data.main.temp) > 5
            && Math.round(weather.data.main.temp) < 28) {
    return 'https://www.flaticon.com/svg/static/icons/svg/1163/1163666.svg';
  } if (Math.round(weather.data.main.temp) >= 28) {
    return 'https://www.flaticon.com/svg/static/icons/svg/1163/1163667.svg';
  } if (Math.round(weather.data.main.feels_like) <= 5) {
    return 'https://www.flaticon.com/svg/static/icons/svg/1163/1163665.svg';
  } if (Math.round(weather.data.main.feels_like) > 5
            && Math.round(weather.val.dataue.main.temp) < 28) {
    return 'https://www.flaticon.com/svg/static/icons/svg/1163/1163666.svg';
  } if (Math.round(weather.data.main.feels_like) >= 28) {
    return 'https://www.flaticon.com/svg/static/icons/svg/1163/1163667.svg';
  }
}

module.exports = {
  getIcon,
  getIconTemp,
  getWeatherIcon,
};
