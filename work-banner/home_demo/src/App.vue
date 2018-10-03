<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="./Goods">切换到Goods路由</router-link>
    <router-view/>
  </div>
</template>

<script>
  /*var one = {
      template:`<div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>`
  };*/

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
