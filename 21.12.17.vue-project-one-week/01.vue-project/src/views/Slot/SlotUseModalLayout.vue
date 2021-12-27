<template>
  <modal-layout>
      <template v-slot:header>
          <h1>팝업 타이틀</h1>
      </template>
      <template v-slot:default>
          <p>pop up contents 1</p>
          <p>pop up contents 2</p>
      </template>
      <template v-slot:footer>
          <button type="button">닫기</button>
      </template>
  </modal-layout>
</template>

<script>
export default {

}
</script>

<style>

</style>