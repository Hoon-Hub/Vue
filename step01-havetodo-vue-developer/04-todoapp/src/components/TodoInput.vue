<template>
  <div class="add">
      <input 
        type="text" 
        class="add__input" 
        placeholder="Enter your task" 
        v-model="newTodoItem"
        @keyup.enter="addOneItem"
        autofocus
      />
      <button 
        class="add__button"
        @click="addOneItem"  
      >Add</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addOneItem() {
      if (this.newTodoItem !== "") {
        this.$emit("addItem", this.newTodoItem)
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