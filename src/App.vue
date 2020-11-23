<template>
  <Navbar></Navbar>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  setup() {
    return {
      Navbar,
    };
  },
};
</script>
