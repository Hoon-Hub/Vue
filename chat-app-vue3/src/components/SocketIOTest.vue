<template>
  <div>
      <h1>Testing Socket.io in Vue3</h1>
      <input type="text" v-model="messageText">
      <button @click="SendMessage">Send</button>
  </div>
</template>

<script>
import { ref, inject } from 'vue'

export default {
    setup() {
        const messageText = ref('')
        const socket = inject('socket')

        const SendMessage = () => {
            const data = messageText.value
            socket.emit('message-on', data)
            console.log(`send Message: [ ${data} ]`)
        }

        return { messageText, SendMessage }
    }
}
</script>

<style>

</style>