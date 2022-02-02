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


<style lang="scss">
@import "./assets/style/_reset";

.top {
  width: 100%;
  min-height: 43.6rem;
  padding: 0 $padding 4.5rem;
  background-image: linear-gradient(145deg, #3770cc 20%, #ce91c9 84%);
}

.body {
  padding: 3rem $padding;
  background-color: #efefef;
}
</style>
