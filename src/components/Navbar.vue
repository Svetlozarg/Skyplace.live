<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
  <router-link class="navbar-brand" to="/">Weather Forecast</router-link>
  <button class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Weather</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/fortune">Fortune Quote</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/FAQ">FAQ</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>

</script>

<style scoped src='bootswatch/dist/lux/bootstrap.min.css'>
nav {
  height: 70px;
  width: 100vw;
}
.navbar-brand {
  letter-spacing: 3px;
  padding: 0 10px;
}
</style>
