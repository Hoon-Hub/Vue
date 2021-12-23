<template>
  <main>
    <h1>Props</h1>
    <page-title :title="title"/>
  </main>
</template>
<script>
import PageTitle from './PageTitle.vue'

export default {
  name: '',
  components: {
    PageTitle
  },
  data() {
    return {
      title: '동적 페이지 타이틀'
    }
  },
}
</script>