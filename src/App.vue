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
  height: 100%;
}
html {
  background: url("./assets/bg.jpg") repeat;
}
</style>
