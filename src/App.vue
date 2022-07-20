<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <page />
    <amit />
    <box />
    <ifelse/>
    <loop/>
    <child msg="hiii amit how are you .What are you doing"  :user="user"  :gatename="gatename"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

import page from './components/Homepage.vue'

import amit from './components/amit.vue'


import box from './components/box.vue'

import ifelse from './components/ifelse.vue'

import loop from './components/forLoop.vue'

import child from './components/child.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    page,
    amit,
    box,
    ifelse,
    loop,
    child

  },
  data(){
    return{
      user:{name:"Amit Kumar",email:"amit@gmail.com"}
    }
  },
  methods:{
    gatename(){
      alert("this is copme from parent function")
      
    }

  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
