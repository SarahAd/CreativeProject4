<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>



<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>
 import AppHeader from './components/AppHeader.vue'
 export default {
     name: 'App',
     components: { AppHeader }
 }
</script>

<style>
body {
    font-size: 16px;
    padding: 0;
    margin: 0;
    border: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
