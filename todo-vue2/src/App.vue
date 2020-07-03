<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <input type="text" placeholder="What needs to be done?" v-model="newTodo"  @keyup.enter="addTodo">
    <ul>
      <li 
        v-for="(todo, index) in todos"
        :class="{completed:todo.completed}"
        :key="todo.id" 
        @click="editTodo(index)">{{todo.title}}
       </li>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      newTodo: '',
      todos: [
        {id: 0, title:'吃', completed: false},
        {id: 1, title:'睡', completed: false},
      ]
    }
  },
  // components: {
  //   HelloWorld
  // },
  methods: {
    addTodo: function(){
      var value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }
      this.todos.push({
        id: this.todos.length + 1,
        title: value,
        completed: false
      });
      this.newTodo = "";
    },
    editTodo: function(idx){
      this.todos[idx].completed = !this.todos[idx].completed
    }
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
.completed{
  text-decoration: line-through;
}
</style>
