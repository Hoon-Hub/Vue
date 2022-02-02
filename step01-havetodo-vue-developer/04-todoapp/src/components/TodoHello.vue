<template>
  <div>
      <div class="hello">What's your Name?</div>
      <label for="user-name">Name</label>
      <input type="text" id="user-name" v-model="userName" @keyup.enter="addUserName">
  </div>
</template>

<script>
export default {
    data () {
        return {
            userName: ''
        }
    },
    methods: {
        addUserName () {
            this.$emit("addName", this.userName)
        }
    }
}
</script>

<style>

</style>