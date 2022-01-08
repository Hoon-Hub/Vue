import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import mixins from './mixins'
import { MyHighlightDirective, MyFocus } from './directive/HighlightDirective'
import i18nPlugin from './plugins/i18n' // 다국어 플러그인 추가
const i18nStrings = {
    en: {
        hi: 'hello!'
    },
    ko: {
        hi: '안녕하세요!'
    }
}

createApp(App)
.directive('highlight', MyHighlightDirective)
.directive('focus', MyFocus)
.use(router, i18nPlugin, i18nStrings).mount('#app')
