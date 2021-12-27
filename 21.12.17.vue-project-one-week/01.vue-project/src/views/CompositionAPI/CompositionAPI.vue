<template>
  <div>
      <hr>
      <router-link to="/Calculator">기존</router-link> | 
      <router-link to="/Composition">Composition API</router-link> | 
      <router-link to="/Composition2">Composition API 2</router-link> |
    <router-link to="/Provide">Provide&Inject</router-link>

      <hr>
      <h2>Calculator - CompositionAPI 1</h2>
      <div>
          <input type="text" v-model="state.num1">
          <span> + </span>
          <input type="text" v-model="state.num2">
          <span> = </span>
          <span>{{ state.result }}</span>
      </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'

export default {
    name: 'calculator',
    setup() {
        let state = reactive({
            num1: 0,
            num2: 0,
            result: computed(() => parseInt(state.num1) + parseInt(state.num2))
        })
        return {
            state
        }
    }
}
</script>

<style>

</style>