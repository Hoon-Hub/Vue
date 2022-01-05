import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import mixins from './mixins'
import { MyHighlightDirective, MyFocus } from './directive/HighlightDirective'

createApp(App)
.directive('highlight', MyHighlightDirective)
.directive('focus', MyFocus)
.use(router).mount('#app')
