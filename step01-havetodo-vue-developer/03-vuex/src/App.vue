<template>
  <div id="app">
    <button @click="$store.commit('increment')">증가</button>
    <button @click="$store.commit('decrement')">감소</button>
    값: {{ count }}
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>
