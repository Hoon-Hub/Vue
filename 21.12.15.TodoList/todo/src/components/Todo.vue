<template>
  <button type="button" 
            class="list-group-item text-left hover-event" 
            @click="clickButton"
          >
            {{ label }}
          </button>
</template>

<script>
export default {
    props: ['label'],
    methods: {
        clickButton () {
            this.$emit('componentClick')
        }
    }
}
</script>

<style>

</style>