function dateBuilder() {
  const d = new Date();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const day = days[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

function unixConvertor(unixTimestamp, weather) {
  const date = new Date(unixTimestamp * 1000);
  let hours;
 if (weather.value.data.timezone < 0) {
    hours = date.getHours();
    if (hours < 10) {
      hours = `${(24 + (weather.value.data.timezone/60/60)) + date.getHours()}`;
    } else if (hours > 10) {
      hours = `${date.getHours() + (weather.value.data.timezone/60/60)}`;
      if (hours < 10) {
        hours = `0${date.getHours() + (weather.value.data.timezone/60/60)}`;
      }
    }
  } else if (weather.value.data.timezone > 0) {
    hours = date.getHours() + weather.value.data.timezone/60/60;
    if (hours < 10) {
      hours = `0${date.getHours() + weather.value.data.timezone/60/60}`;
    } else if (hours > 24) {
      hours = `0${date.getHours() + weather.value.data.timezone/60/60 - 24}`;
    }
  } else if (weather.value.data.timezone === 0) {
    hours = date.getHours() + weather.value.data.timezone/60/60;
    if (hours < 10) {
      hours = `0${date.getHours() + weather.value.data.timezone/60/60}`;
    }
  }
  const minutes = `0${date.getMinutes()}`;
  const formattedTime = `${hours}:${minutes.substr(-2)}`;
  return formattedTime;
}

function getDayUnix(timestamp) {
    const date = new Date(timestamp * 1000);
    var day = date.getDay();
    var setDate = date.getDate();
    if (day === 0) {
      day = 'Monday';
    } else if (day === 1) {
      day = 'Tuesday';
    } else if (day === 2) {
      day = 'Wednesday';
    } else if (day === 3) {
      day = 'Thursday';
    } else if (day === 4) {
      day = 'Friday';
    } else if (day === 5) {
      day = 'Saturday';
    } else if (day === 6) {
      day = 'Sunday';
    }
    return day + ', ' + setDate;
}

module.exports = {
  getDayUnix,
  unixConvertor,
  dateBuilder,
};