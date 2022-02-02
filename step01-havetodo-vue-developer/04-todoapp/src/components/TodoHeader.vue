<template>
  <header class="header">
      <h1 class="logo">My Todo List</h1>
      <p class="date"> {{timestamp}} </p>
  </header>
</template>

<script>
import getDate from '@/assets/commonJS/getDate.js'

export default {
    data () {
        return {
            timestamp: ''
        }
    },
    created () {
        console.log('created()는 data와 events에 접근할 수 있고, 가상 DOM은 접근할 수 없는 상태이기 때문에 data만 필요한 날짜에 접근하여 해당 내용을 구성하였습니다.')
        this.timestamp = `${getDate().month}/${getDate().date} ${getDate().week}`
    }
}
</script>


<style lang="scss">
.header {
  max-width: $max-width;
  margin: 0 auto;
  padding: 20px 0 55px;
  color: #fff;
  @include flexbox;
  @include align-items(center);
  @include justify-content(space-between);

  &__date {
    letter-spacing: 0.02rem;
    font-size: 1.2rem;
  }
}

.logo {
  width: 5.8rem;
  height: 1.6rem;
  background-size: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: icon("logo", "ffffff");
}
</style>