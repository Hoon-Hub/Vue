<template>
  <div id="app">
    <div class="container">
      <div class="col-md-6 offset-md-3">
        <div class="text-end">
        <button type="button" class="btn btn-sm" @click="changeCurrentState('active')">할일</button>
        <button type="button" class="btn btn-sm" @click="changeCurrentState('done')">완료</button>
        <button type="button" class="btn btn-sm" @click="changeCurrentState('all')">전체</button>
      </div>
        <h1 class="text-center">Todo App</h1>
        <div class="d-flex p-2  justify-content-between">
          <input type="text" class="p-2 form-control" v-model="userInput" @keyup.enter="addNewTodo">
          <button type="button" class="pl-3 btn btn-sm btn-primary" @click="addNewTodo">submit</button>
        </div>

      </div>
      <div class="list-group text-start d-flex mb-4" >
        <template  v-for="todo in activeTodoList" >
          <todo
            :label="todo.label"
            :key="todo.index" 
            @componentClick="toggleTodoState(todo)" 
            >
          </todo>
        </template>
      </div>

      
    </div>
  </div>
</template>

<script>
import Todo from '@/components/Todo'
export default {
  name: 'App',
  components:{
    Todo
  },
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
  .hover-event:hover {
    background: #777777;
    color: white;
  }
</style>
