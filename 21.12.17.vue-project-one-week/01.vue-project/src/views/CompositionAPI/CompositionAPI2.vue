<template>
  <div>
      <hr>
      <router-link to="/Calculator">기존</router-link> | 
      <router-link to="/Composition">Composition API</router-link> | 
      <router-link to="/Composition2">Composition API 2</router-link> |
    <router-link to="/Provide">Provide&Inject</router-link>

      <hr>
      <h2>Calculator - composition API 2</h2>
      <div>
          <input type="text" v-model="num1">
          <span> + </span>
          <input type="text" v-model="num2">
          <span> = </span>
          <span>{{ result }}</span>
      </div>
  </div>
</template>

<script>
import {plusCalculator} from './common.js'

export default {
    name: 'calculator',
    setup() {
        let {num1, num2, result} = plusCalculator() 
        return {
            num1, num2, result
        }
    }
}
</script>

<style>

</style>