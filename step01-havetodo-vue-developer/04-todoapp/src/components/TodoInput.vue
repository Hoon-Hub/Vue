<template>
  <div class="add">
      <input 
        type="text" 
        class="add__input" 
        placeholder="Enter your task" 
        v-model="newTodoItem"
        @keyup.enter="addTodoItem"
      />
      <button 
        class="add__button"
        @click="addTodoItem"  
      >Add</button>
  </div>
</template>
<script>
import getDate from "../assets/commonJS/getDate.js";

export default {
  data () {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addTodoItem() {
      if (this.newTodoItem !== "") {
        var value = {
          item: this.newTodoItem,
          date: `${getDate().date} ${getDate().week}`,
          time: getDate().time,
          completed: false
        };
        localStorage.setItem(this.newTodoItem, JSON.stringify(value));
        this.clearInput();
      }
    },
    clearInput () {
      this.newTodoItem = ""
    }
  }

}
</script>
<style lang="scss">
.add {
  position: relative;
  max-width: $max-width;
  margin: 0 auto;

  .main-input {
    @include animation(fadeShow, 800ms, 1, 900ms);
  }
}
</style>