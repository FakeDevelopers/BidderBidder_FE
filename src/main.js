import { createApp } from 'vue'
import router from './routes/index'
import App from './App.vue'
import store from './store'



createApp(App).use(store).use(router).mount('#app')
