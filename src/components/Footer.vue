<template>
  <div>
    <p>Weather Forecast | All rights reserved © 2020<small> | Made by S.Georgiev</small></p>
  </div>
</template>

<style scoped>
div {
  width: 100%;
  height: 60px;
  background-color: black;
  text-align: center;
  display: table;
  clear: both;
  position: relative;
  margin-top: 150px;
}

div p {
  font-size: 16px;
  z-index: 99;
  color: white;
  display: flex;
  display: table-cell;
  vertical-align: middle;
}

@media only screen and (max-width: 600px) {
  div p {
    font-size: 14px;
  }

  small {
    display: none;
  }
}
</style>>
