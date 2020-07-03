<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Vue-Cli: Hello Vue3</h1>
    <button @click="add">click times:{{num}}</button>
  </div>
</template>

<script>
import { ref } from 'vue'

// 有一点hooks的感觉 || react userState
// composition API的一个例子
export default {
  setup () {
    const num = ref(0)
    function add () {
      num.value+=1
    }
    return {num, add}
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
