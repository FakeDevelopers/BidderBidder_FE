import {createApp} from 'vue'
import router from './routes/index'
import App from './App.vue'
import store from './store'
import {createI18n} from 'vue-i18n'
import messages from './i18n'

const i18n = createI18n({

    locale: 'ko',
    fallbackLocale: 'en',
    messages
})

createApp(App).use(store).use(router).use(i18n).mount('#app')
