import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router.js'
import { createPinia } from 'pinia'
import VueConfetti from 'vue-confetti'


createApp(App).use(router)
  .use(createPinia()).use(VueConfetti).mount('#app')
