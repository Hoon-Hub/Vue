<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-title></todo-title>
    <todo-input></todo-input>
    <todo-controller></todo-controller>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoController from '@/components/TodoController.vue'
import TodoFooter from '@/components/TodoFooter.vue'
import TodoHeader from '@/components/TodoHeader.vue'
import TodoInput from '@/components/TodoInput.vue'
import TodoList from '@/components/TodoList.vue'
import TodoTitle from '@/components/TodoTitle.vue'

export default {
  name: 'App',
  components: {
    TodoController,
    TodoFooter,
    TodoHeader,
    TodoInput,
    TodoList,
    TodoTitle
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
