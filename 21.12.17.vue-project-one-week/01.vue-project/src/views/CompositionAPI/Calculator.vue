<template>
  <div>
      <hr>
      <router-link to="/Calculator">기존</router-link> | 
      <router-link to="/Composition">Composition API</router-link> | 
      <router-link to="/Composition2">Composition API 2</router-link> |
    <router-link to="/Provide">Provide&Inject</router-link>

      <hr>
      <h2>Calculator</h2>
      <div>
          <input type="text" v-model="num1" @keyup="plusNumbers">
          <span> + </span>
          <input type="text" v-model="num2" @keyup="plusNumbers">
          <span> = </span>
          <span>{{ result }}</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'calculator',
    data () {
        return {
            num1: 0,
            num2: 0,
            result: 0
        }
    },
    methods: {
        plusNumbers() {
            this.result = parseInt(this.num1) + parseInt(this.num2)
        }
    }

}
</script>

<style>

</style>