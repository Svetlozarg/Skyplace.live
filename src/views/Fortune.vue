<template>
  <div class="app">
    <div class="galleryIntro">
      <h2>Fortune quote of the day</h2>
      <p>Get your fortune quote of the day and feel encouraged and inspired</p>
    </div>

    <hr style="width:80%; background-color: grey;">

    <button @click="isHidden = !isHidden"
    type="button" class="btn btn-primary">Get your quote of the day</button>

    <div class="fortuneBox" v-if="fortuneText">
      <h4 v-if="isHidden">Your quote of the day</h4>
      <p v-if="isHidden">{{ fortuneText.contents.quotes[0].quote }}</p>
      <i v-if="isHidden">{{ fortuneText.contents.quotes[0].author }}</i>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import { ref } from 'vue';
import Footer from '../components/Footer.vue';

export default {
  setup() {
    const fortuneText = ref('');
    const isHidden = ref(false);

    async function fortuneQuote() {
      const fortune = await fetch('https://quotes.rest/qod?language=en', {
        headers: {
          Accept: 'application/json',
        },
      });
      const fortuneObj = await fortune.json();
      fortuneText.value = fortuneObj;
    }
    fortuneQuote();
    return {
      isHidden,
      Footer,
      fortuneText,
      fortuneQuote,
    };
  },
};
</script>

<style scoped>
.app {
  text-align: center;
}
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

.fortuneBox {
  width: 60vw;
  margin: 5% auto;
  padding: 10vh 0;
  text-align: center;
}

.fortuneBox p {
  text-align: justify;
  font-size: 16px;
  margin: 20px 0;
}

button {
  margin: 2% 0;
}

@media only screen and (max-width: 600px) {
  .galleryIntro h2 {
    font-size: 40px;
  }
  .galleryIntro p {
    font-size: 18px;
  }
  .fortuneBox {
    width: 90vw;
    padding: 5vh 0;
  }
  button {
   margin: 5% 0;
  }
}
</style>
