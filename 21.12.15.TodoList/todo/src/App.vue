<template>
  <div id="app">
    <div class="container">
      <div class="col-md-6 offset-md-3">
        <h1 class="text-center">Todo App</h1>
        <input type="text" class="form-control" v-model="userInput" @keyup.enter="addNewTodo">
        <button type="button" @click="addNewTodo">submit</button>
      </div>
      <div class="list-group text-left d-flex mb-4" >
        <template  v-for="todo in activeTodoList" >
          <button type="button" :key="todo.index" class="list-group-item text-left" @click="toggleTodoState(todo)">
            {{ todo.label }}
          </button>
        </template>
      </div>

      <div class="text-right">
        <button type="button" class="btn btn-sm" @click="changeCurrentState('active')">할일</button>
        <button type="button" class="btn btn-sm" @click="changeCurrentState('done')">완료</button>
        <button type="button" class="btn btn-sm" @click="changeCurrentState('all')">전체</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      userInput: '',
      todoList:[],
      currentState: 'active'
    }
  },
  computed: {
    activeTodoList() {
      return this.todoList.filter(todo => this.currentState === 'all' || todo.state === this.currentState)
    }
  },
  methods: {
    addNewTodo(){
      if(this.userInput === '') return ''
      this.todoList.push({
        label: this.userInput,
        state: 'active'
      })
      this.userInput = ''
    },
    toggleTodoState(todo) {
      todo.state = todo.state === 'active' ? 'done' : 'active'
    },
    changeCurrentState(state){
      this.currentState = state
    }
  },

}
</script>

<style>

</style>
