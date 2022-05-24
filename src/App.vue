<template>
  <div>
    <HeaderScreen></HeaderScreen>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderScreen from './components/HeaderScreen'

export default {
  name: 'App',
  components: {
    HeaderScreen,
  }
}
</script>

<style>
@import "css/reset.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>