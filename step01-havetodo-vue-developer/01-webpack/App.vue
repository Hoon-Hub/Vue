<template>
  <div>
      <div>{{num1}} + {{num2}}</div>
      <form @submit="SubmitForm">
          <input type="number" v-model="input" />
          <button type="submit">입력</button>
          <div>결과: {{result}}</div>
      </form>
  </div>
</template>

<script>
export default {
    data () {
        return {
            num1: Math.ceil(Math.random()*10),
            num2: Math.ceil(Math.random()*10),
            input: '',
            result: ''
        }
    },
    methods: {
        SubmitForm (event) {
            event.preventDefault();
            if(this.num1 + this.num2 == this.input) {
                this.result = "정답"
                this.num1 = Math.ceil(Math.random()*10)
                this.num2 = Math.ceil(Math.random()*10)
                this.input = ''
            } else {
                this.input = ''
                this.result = "오답"
            }
        }
    }
}
</script>

<style>

</style>