<template>
  <header class="header">
      <h1 class="logo">My Todo List</h1>
      <p class="date"> {{timestamp}} </p>
  </header>
</template>

<script>
export default {
    data () {
        return {
            timestamp: ''
        }
    },
    created () {
        console.log('created()는 data와 events에 접근할 수 있고, 가상 DOM은 접근할 수 없는 상태이기 때문에 data만 필요한 날짜에 접근하여 해당 내용을 구성하였습니다.')
        const now = new Date()
        const month = now.getMonth() + 1
        const date = now.getDate()
        const weekList = new Array("Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.")
        const week = weekList[now.getDay()]
        this.timestamp = `${month}/${date} ${week}`
    }
}
</script>

<style>

</style>