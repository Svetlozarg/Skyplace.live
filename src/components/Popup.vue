<template>
  <div class="popup">
    <button type="button" class="closeBtn" title="Close">Close</button>
    <h2>Monday, 21</h2>

    <div class="weather-wrap">
      <div class="location-box">
        <div class="location">Southampton, UK</div>
        <div class="icon"><img src="https://bmcdn.nl/assets/weather-icons/all/cloudy.svg"></div>
        <div class="date">Saturday 21 November 2020</div>

      <div class="sun">
        <img class="icon-Text" src="https://www.flaticon.com/svg/static/icons/svg/1163/1163765.svg">
        <span class="span">Sunrise time:</span>
        07:32
        <br class="br-media" />
        <img class="icon-Text" src="https://www.flaticon.com/svg/static/icons/svg/1163/1163766.svg">
        <span class="span">Sunset time:</span>
        16:11
      </div>
    </div>

    <div class="center">
      <div class="weather-box">
        <div>
          <div class="desc">
            <img class="icon-Text" src="https://www.flaticon.com/svg/static/icons/svg/2938/2938130.svg" alt=""><br class="br"/>
            <span class="span">Currently:</span><br class="br"/> broken clouds
            </div>
          <div class="weather">
            <img class="icon-Text" src="https://www.flaticon.com/svg/static/icons/svg/1163/1163666.svg"><br class="br"/>
            <span class="span">Temperature:</span><br class="br"/> 11°C°C
            </div>
          <div class="feels">
            <img class="icon-Text" src="https://www.flaticon.com/svg/static/icons/svg/1163/1163666.svg"><br class="br"/>
            <span class="span">Feels like:</span><br class="br"/> 9°C
          </div>
        </div>

        <div>
          <div class="wind">
            <img class="icon-Text" src="https://www.flaticon.com/svg/static/icons/svg/1163/1163774.svg" alt=""><br class="br"/>
            <span class="span">Wind speed:</span><br class="br"/> 2.1m/s
          </div>
          <div class="visibility">
            <img class="icon-Text" src="https://www.flaticon.com/svg/static/icons/svg/907/907125.svg" alt=""><br class="br"/>
            <span class="span">Visibility:</span><br class="br"/>
              10km
          </div>
          <div class="pressure">
            <img class="icon-Text" src="https://www.flaticon.com/svg/static/icons/svg/213/213980.svg" alt=""><br class="br"/>
            <span class="span">Pressure:</span><br class="br"/> 1027hPa
          </div>
        </div>

        <div>
          <div class="humidity">
            <img class="icon-Text" src="https://www.flaticon.com/svg/static/icons/svg/1163/1163750.svg" alt=""><br class="br"/>
            <span class="span">Humidity:</span><br class="br"/> 87%
          </div>
          <div class="clouds">
            <img class="icon-Text" src="https://www.flaticon.com/svg/static/icons/svg/1163/1163736.svg" alt=""><br class="br"/>
            <span class="span">Cloudiness:</span><br class="br"/> 75%
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup {
  position: fixed;
  left: 5%;
  top: 15%;
  z-index: 100;
  width: 100px;
  height: 100px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(87, 86, 86, 0.35);
  width: 90vw;
  height: 80vh;
  border-radius: 5px;
}
.closeBtn {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px 20px;
  color: white;
  background:none;
  border:none;
  font-size: 18px;
}
.closeBtn:hover {
  color: rgb(212, 46, 46);
}
h2 {
  color: rgb(116, 219, 245);
  padding: 20px 0 0 0;
}

.icon img {
  width: 120px;
}
.location-box {
  padding: 20px 0;
  width: 20vw;
  text-align: center;
  margin: 0 auto;
  border-bottom: 2px solid grey;
}
.location-box .location {
  color: rgb(255, 255, 255);
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
.span {
  text-shadow: -1px 0 rgb(31, 70, 80), 0 0.5px rgb(31, 70, 80), 0.5px 0 rgb(31, 70, 80), 0 -0.5px rgb(31, 70, 80);
  color: rgb(146, 226, 246);
}
.location-box .date {
  color: #FFF;
  font-size: 15px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}
.weather-box {
  text-align: justify;
  margin: 2% auto;
  display: grid;
  grid-template-columns: 30% 30% auto;
  justify-content: center;
}
.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color:rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.weather, .desc, .wind, .sun, .coord, .humidity, .clouds, .visibility,
.feels, .pressure, .precipitation {
  color: #FFF;
  font-size: 16px;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  padding: 5px 0;
}
.icon-Text {
  width: 40px;
  margin: 0 5px;
}
.br-media {
  display: block;
}
.br {
  display: none;
}
</style>