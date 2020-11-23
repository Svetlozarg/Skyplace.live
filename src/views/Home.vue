<template>
  <div>
    <main>
      <!-- Search Box -->
      <div class="search-box">
        <input
          id="search"
          type="text"
          class="search-bar"
          placeholder="Search..."
          v-model="querry"
          @input="atInput()"
        />
      </div>

      <!-- Weather Info -->
      <div
        class="weather-wrap"
        v-if="
          typeof weather.data !== 'undefined' &&
          typeof weather.data.sys !== 'undefined'
        "
      >
        <div class="location-box">
          <div class="location">
            {{ weather.data.name }}, {{ weather.data.sys.country }}
          </div>
          <div class="icon"><img :src="getIconss()" /></div>
          <div class="date">{{ dateBuilders() }}</div>

          <div class="sun">
            <img
              class="icon-Text"
              src="https://www.flaticon.com/svg/static/icons/svg/1163/1163765.svg"
            />
            <span class="span">Sunrise time:</span>
            {{ unixConvertors(weather.data.sys.sunrise) }}
            <br class="br-media" />
            <img
              class="icon-Text"
              src="https://www.flaticon.com/svg/static/icons/svg/1163/1163766.svg"
            />
            <span class="span">Sunset time:</span>
            {{ unixConvertors(weather.data.sys.sunset) }}
          </div>
        </div>

        <div class="center">
          <div class="weather-box">
            <div>
              <div class="desc">
                <img
                  class="icon-Text"
                  src="https://www.flaticon.com/svg/static/icons/svg/2938/2938130.svg"
                  alt=""
                /><br class="br" />
                <span class="span">Currently:</span><br class="br" />
                {{ weather.data.weather[0].description }}
              </div>
              <div class="weather">
                <img class="icon-Text" :src="getIconTemps()" /><br class="br" />
                <span class="span">Temperature:</span><br class="br" />
                {{ Math.round(weather.data.main.temp) }}°C
              </div>
              <div class="feels">
                <img class="icon-Text" :src="getIconTemps()" /><br class="br" />
                <span class="span">Feels like:</span><br class="br" />
                {{ Math.round(weather.data.main.feels_like) }}°C
              </div>
            </div>

            <div>
              <div class="wind">
                <img
                  class="icon-Text"
                  src="https://www.flaticon.com/svg/static/icons/svg/1163/1163774.svg"
                  alt=""
                /><br class="br" />
                <span class="span">Wind speed:</span><br class="br" />
                {{ weather.data.wind.speed }}m/s
              </div>
              <div class="visibility">
                <img
                  class="icon-Text"
                  src="https://www.flaticon.com/svg/static/icons/svg/907/907125.svg"
                  alt=""
                /><br class="br" />
                <span class="span">Visibility:</span><br class="br" />
                {{ Math.round(weather.data.visibility / 1000) }}km
              </div>
              <div class="pressure">
                <img
                  class="icon-Text"
                  src="https://www.flaticon.com/svg/static/icons/svg/213/213980.svg"
                  alt=""
                /><br class="br" />
                <span class="span">Pressure:</span><br class="br" />
                {{ weather.data.main.pressure }}hPa
              </div>
            </div>

            <div>
              <div class="humidity">
                <img
                  class="icon-Text"
                  src="https://www.flaticon.com/svg/static/icons/svg/1163/1163750.svg"
                  alt=""
                /><br class="br" />
                <span class="span">Humidity:</span><br class="br" />
                {{ weather.data.main.humidity }}%
              </div>
              <div class="clouds">
                <img
                  class="icon-Text"
                  src="https://www.flaticon.com/svg/static/icons/svg/1163/1163736.svg"
                  alt=""
                /><br class="br" />
                <span class="span">Cloudiness:</span><br class="br" />
                {{ weather.data.clouds.all }}%
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Alert -->
      <div class="alert alert-danger" v-if="weather.error">
        <strong>{{ weather.error }}</strong>
      </div>

      <!-- Loading -->
      <div
        class="spinner-border"
        style="
          width: 6rem;
          height: 6rem;
          color: rgb(146, 226, 246);
          margin: 5% 0;
        "
        v-if="weather.loading"
        role="status"
      ></div>

      <div
        class="weather-wrap"
        v-if="
          typeof weatherForecast.data !== 'undefined' &&
          typeof weatherForecast.data.daily !== 'undefined'
        "
      >
        <h2 class="forecast-title">Weather Forecast</h2>
        <div class="forecast-wrapper">
          <div
            v-for="weatherItem in weatherForecast.data.daily"
            :key="weatherItem.id"
          >
            <!-- Day Items ForeCast -->
            <div class="day-item" @click="isOpen = !isOpen">
              <h2>{{ getDayUnixs(weatherItem.dt) }}</h2>
              <img :src="getWeatherIcons(weatherItem.weather[0].description)" />
              <p class="desc">{{ weatherItem.weather[0].description }}</p>
              <p>
                <img
                  class="temp"
                  src="https://www.flaticon.com/svg/static/icons/svg/1163/1163665.svg"
                /><span class="span-min">Min:</span>
                {{ Math.round(weatherItem.temp.min) }}°
              </p>
              <p>
                <img
                  class="temp"
                  src="https://www.flaticon.com/svg/static/icons/svg/1163/1163667.svg"
                /><span class="span-max">Max:</span>
                {{ Math.round(weatherItem.temp.max) }}°
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref, onMounted } from "vue";
import getWeather from "../hooks/getWeather";
import getWeatherForecast from "../hooks/getForecastWeather";
import getIcons from "../hooks/getIcons";
import getFunc from "../hooks/getFunc";
import fetchWeatherForecast from "../lib/forecast_API";
import fetchWeather from "../lib/API";

export const weather = ref({});
export const querry = ref("");
export const desc = ref("");
export const weatherForecast = ref({});
export const isOpen = ref(false);

onMounted(() => {
  weather.loading = true;
  getCurLocation();
  var options = {
    types: ["(cities)"],
  };
  var input = document.getElementById("search");
  let autocomplete = new google.maps.places.Autocomplete(input, options);
  google.maps.event.addListener(autocomplete, "place_changed", () => {
    let place = autocomplete.getPlace();
    querry.value = place["name"];
    weather.value = getWeather(place["name"]);
    weatherForecast.value = getWeatherForecast(place["name"]);
  });
  weather.loading = false;
});

function getCurLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude.toFixed(2);
        const lon = position.coords.longitude.toFixed(2);
        const weatherObj = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyCHdX_VRHblxlZJ8rULsKiCsVBrgMeU_8s`
        );
        weather.value = await weatherObj.json();
        const cityName =
          weather.value.results[0].address_components[2].short_name;
        weather.value = getWeather(cityName);
        weatherForecast.value = getWeatherForecast(cityName);
      },
      (error) => {
        console.log(error.message);
      }
    );
  } else {
    console.log("You're browser does not support geolocation");
  }
}

export function atInput() {
  if (querry.value !== "") {
    weather.value = getWeather(querry.value);
    weatherForecast.value = getWeatherForecast(querry.value);
  } else {
    querry.value = "";
    weather.value = {};
    weatherForecast.value = {};
  }
}

// Weather Icons
export function getIconss() {
  return getIcons.getIcon(weather.value);
}

// Weather Forecast Icons
export function getWeatherIcons(description) {
  return getIcons.getWeatherIcon(description);
}

// Small icons
export function getIconTemps() {
  return getIcons.getIconTemp(weather.value);
}

// Convert sunset & sunrise time
export function unixConvertors(unixTimestamp) {
  return getFunc.unixConvertor(unixTimestamp, weather);
}

export function getDayUnixs(timestamp) {
  return getFunc.getDayUnix(timestamp);
}

export function dateBuilders(timestamp) {
  return getFunc.dateBuilder(timestamp);
}
</script>

<style scoped>
@import "../assets/style.css";
</style>
