<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
  <h1>Vue3 todo list</h1>
  <input
    type="text"
    placeholder="What needs to be done?"
    v-model="state.newTodo"
    @keyup.enter="addTodo"
  />
  <ul>
    <li
      v-for="(todo, index) in state.todos"
      :class="{completed: todo.completed}"
      :key="todo.id"
      @click="editTodo(index)"
    >{{todo.title}}</li>
    剩余未完成任务：{{remaining}}
  </ul>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
import useOperator from "./addTodo";

import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  setup() {
    // createbefore
    // created
    const state = reactive({
      newTodo: "",
      todos: [
        { id: 0, title: "吃", completed: false },
        { id: 1, title: "睡", completed: false }
      ]
    });

    const remaining = computed(
      () => state.todos.filter(todo => !todo.completed).length
    );

    // 提取方法
    // const { addTodo } =  useOperator(state);

    function addTodo() {
      var value = state.newTodo && state.newTodo.trim();
      if (!value) {
        return;
      }
      state.todos.push({
        id: state.todos.length + 1,
        title: value,
        completed: false
      });
      state.newTodo = "";
    }

    function editTodo(idx) {
      state.todos[idx].completed = !state.todos[idx].completed;
    }
    return {
      // ...toRefs(state),
      state,
      addTodo,
      editTodo,
      remaining
    };
  },
  components: {
    HelloWorld
  }
};
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
.completed {
  text-decoration: line-through;
}
</style>
