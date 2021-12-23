<template>
  <main>
      <child @send-message="sendMessage" ref="child" />
      <button type="button" @click="changeChildData">Change Child Data</button>

  </main>
</template>

<script>
import Child from './Child.vue'

export default {
    components:{
        Child
    },
    mounted() {
        this.$refs.child.$refs.btn.click()
        this.$refs.child.callFromParent()
    },
    methods: {
        changeChildData() {
            this.$refs.child.msg = "부모 컴포넌트가 변경한 데이터"
        },
        sendMessage(data){
            console.log(data)
        }
    }
}
</script>
