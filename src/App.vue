<template>
  <div>
    <MainScreen></MainScreen>
    <WriteScreen></WriteScreen>
    <FirebaseScreen></FirebaseScreen>
  </div>
</template>

<script>
import MainScreen from './components/MainScreen'
import WriteScreen from './components/WriteScreen'
import FirebaseScreen from './components/FirebaseScreen'

export default {
  name: 'App',
  components: {
    MainScreen,
    WriteScreen,
    FirebaseScreen
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
