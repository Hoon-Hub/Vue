<template>
  <div>
      <h1>Directives</h1>
      <p v-highlight>It will be background yellow by Direction : "v-highlight" by Directions</p>
      <input v-focus type="text"><br>
      <p v-backgroundRed>It will be background red</p>
  </div>
</template>
<script>
export default {
    directives: {
        backgroundRed: {
            beforeMount(el) {
                el.style.background = 'red'
                el.style.color = 'white'
            }
        }
    }
}
</script>

<style>

</style>