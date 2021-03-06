import { createApp } from 'vue'
import App from './App.vue'
import Socketio from '@/plugins/socketio'

const app = createApp(App)


app.use(Socketio, {
    connection: 'http://localhost:3000',
})

app.mount('#app')
