<template>
  <div class="home">
    <h1>Drag Or Drop</h1>
    <drop-zone></drop-zone>
    <span class="file-info">File: {{ dropzoneFile.name }}</span>
  </div>
</template>

<script>
import { ref } from 'vue'
import DropZone from '@/components/DropZone'

export default {
  name: 'Home',
  components: {
      DropZone
  },
  setup () {
    let dropzoneFile = ref('')

    return { dropzoneFile }
  }
}
</script>

<style lang="scss" scoped>
.home {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;

    h1 {
        font-size: 40px;
        margin-bottom: 32px;
    }

    .file-info {
        margin-top: 32px;
    }
}
</style>
