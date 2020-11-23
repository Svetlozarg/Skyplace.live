<template>
  <div>
    <div class="galleryIntro">
      <h2>FAQ</h2>
      <p>Frequently asked questions</p>
    </div>

    <hr style="width:80%; background-color: grey;">

    <div class="wrapper">
      <h3>Does everything is safe and secure?</h3>
      <p>
        We ensure our users 100% with our promise that everything is safe and secure. We
        do not track any locations or IP addresses. We use simple requests for extracting
        the whole date from a database.
      </p>

      <h3>Does weather forecast track my location and ip address</h3>
      <p>
        The weather forecast does not track any locations or IP addresses. Furthermore, we
        use only API requests to the main database to extract the data for every city in
        the world.
      </p>

      <h3>Can I get more than one fortune quote a day?</h3>
      <p>
        The answer is simple and easy - NO. Every user is allowed to receive only one
        fortune quote a day. The idea is to see your luck once a day to make everyone
        happy and satisfied with life.
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
