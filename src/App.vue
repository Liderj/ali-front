<template>
  <div id="app" class="app-ignore">
    <router-view/>
  
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", "shouxie", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@font-face {
  font-family: "shouxie";
  src: url("./assets/fonts/shoushu.ttf") format("truetype");
}
</style>
