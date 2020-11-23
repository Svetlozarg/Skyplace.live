<template>
  <div>
    <div class="galleryIntro">
      <h2>About</h2>
      <p>About the website and it's system</p>
    </div>

    <hr style="width:80%; background-color: grey;">

    <div class="wrapper">
      <h3>Weather forecast system in a nutshell</h3>
      <p>
        The whole idea of the project is to make it easier for everyone with an easy
        web app where you can type the name of the city and see the weather forecast
        for that chosen city. Everything is made with 100% easy and modern UI look to e
        nsure user's satisfaction at 100%.
      </p>

      <p style="padding-bottom: 5%">
        Our fortune quote's webpage allows users to receive one fortune quote a day to make
        their mood happy and joyful. It is a simple way of making someone feels better!
      </p>

      <h3>How everything was built</h3>
      <p>
        For the front-end, we used Vue.js, one of the modern popular frameworks nowadays,
        for a perfect single page application to ensure a beautiful and modern User
        Interface. Thanks to the bootswatch theme and custom CSS, we styled and decorated
        our webpage to look phenomenal for everyday use without problems or difficulties.
      </p>

      <p>
        We use API requests to extract data from a database to get the information for
        every city around the world. For the fortune quotes, we use a basic script to
        pick a random quote for every user a day.
      </p>

      <p>
        The whole Weather Forecast project is styled and created by Svetlozar Georgiev
      </p>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Footer from '../components/Footer.vue';

export default {
  setup() {
    return {
      Footer,
    };
  },
};
</script>

<style scoped>
.galleryIntro {
  padding: 20vh 0 1% 0;
  text-align: center;
}

.galleryIntro h2 {
  font-size: 30px;
}

.galleryIntro p {
  color: grey;
}

.wrapper {
  width: 60%;
  margin: 1% auto;
  padding: 4% 0;
}

.wrapper h3 {
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
}

.wrapper p {
  font-size: 18px;
  margin-bottom: 5%;
  text-align: justify;
}

@media only screen and (max-width: 600px) {
  .galleryIntro h2 {
    font-size: 40px;
  }
  .galleryIntro p {
    font-size: 18px;
  }
  .wrapper {
    width: 90%;
    padding: 10% 0;
  }
  .wrapper h3 {
    font-size: 22px;
  }

  .wrapper p {
    font-size: 16px;
  }
}
</style>
