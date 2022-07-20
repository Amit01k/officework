<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <page />
    <amit />
    <box />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

import page from './components/Homepage.vue'

import amit from './components/amit.vue'


import box from './components/box.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    page,
    amit,
    box

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
