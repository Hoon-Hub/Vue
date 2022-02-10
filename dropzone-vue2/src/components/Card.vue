<template>
  <div
   class="card"
   :id="id"
   :draggable="draggable"
   @dragstart="dragStart"
   @dragover.stop
  >

  </div>
</template>

<script>

export default {
    props: ['id', 'dragable'],
    methods: {
        dragStart: e => {
            const target = e.target

            e.dataTransfer.setData('card_id', target.id)

            setTimeout(() => {
                target.style.display = 'none'
            }, 0)
        }
    }
}
</script>

<style>

</style>