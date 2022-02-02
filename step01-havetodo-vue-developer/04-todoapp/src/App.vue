<template>
  <div id="app">
    <todo-header></todo-header>
    <div v-if="userName">
      <todo-title :propsdata="checkCount"></todo-title>
      <todo-input @addItem="addOneItem" ></todo-input>
    </div>
    <div v-else>
      <todo-hello @addName="addUserName"></todo-hello>
    </div>
    <todo-controller 
      @clearAll="clearAllItem"
      @sortItem="sortAllItem"
    ></todo-controller>
    <todo-list 
      :propsdata="todoItems"
      @removeItem="removeOneItem"
      @toggleItem="toggleOneItem"
    ></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoController from '@/components/TodoController.vue'
import TodoFooter from '@/components/TodoFooter.vue'
import TodoHeader from '@/components/TodoHeader.vue'
import TodoInput from '@/components/TodoInput.vue'
import TodoList from '@/components/TodoList.vue'
import TodoHello from '@/components/TodoHello.vue'
import TodoTitle from '@/components/TodoTitle.vue'

import getDate from "./assets/commonJS/getDate.js";

export default {
  name: 'App',
  components: {
    TodoController,
    TodoFooter,
    TodoHeader,
    TodoInput,
    TodoList,
    TodoTitle,
    TodoHello
  },
  data () {
    return {
      todoItems: [],
      userName: ''
    }
  },
  created() {
    this.userName = localStorage.getItem("userName")
    
    if(localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          )
        }
      }
    }
  },
  mounted() {
    this.sortTodoOldest()
  },
  methods: {
    addUserName(userName) {
      localStorage.setItem("userName", userName)
      this.userName = userName
    },
    sortTodoLatest() {
      this.todoItems.sort(function(a, b) {
        return b.time - a.time;
      });
    },
    sortTodoOldest() {
      this.todoItems.sort(function(a, b) {
        return a.time - b.time;
      });
    },
    sortAllItem(selectedSort) {
      switch (selectedSort.value) {
        case "date-desc" : this.sortTodoLatest(); break;
        case "date-asc"  : this.sortTodoOldest(); break;
      }
    },
    // 1개 추가
    addOneItem (todoItem) {
      var value = {
          item: todoItem,
          date: `${getDate().date} ${getDate().week}`,
          time: getDate().time,
          completed: false
        };
      localStorage.setItem(todoItem, JSON.stringify(value));
      this.todoItems.push(value)
    },

    // 1개 삭제
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item)
      this.todoItems.splice(index, 1)
    },

    // 완료 -미완료 전환
    toggleOneItem(todoItem) {
      todoItem.completed = !todoItem.completed
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },

    clearAllItem() {
      this.todoItems = []
      localStorage.clear()
    }
  },
  computed: {
    checkCount() {
      const checkLeftItems = () => {
        let leftCount = 0
        for(let i = 0; this.todoItems.length; i++) {
          if(this.todoItems[i].completed === false) {
            leftCount ++
          }
        }
        return leftCount
      }
      const count = {
        total: this.todoItems.length,
        left: checkLeftItems()
      }
      return count
    }
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
