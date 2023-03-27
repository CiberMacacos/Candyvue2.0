import { createRouter, createWebHistory } from 'vue-router'

import Mainkoa from './components/Mainkoa.vue'
import Headerkoa from './components/comun/Headerkoa.vue'
import Footerkoa from './components/comun/Footerkoa.vue'

const routes = [
  {
    path: './components/comun/Headerkoa.vue',
    name: 'Header',
    component: 'Headerkoa'
  },
  {
    path:'./components/Mainkoa.vue',
    name: 'Home',
    component: 'Mainkoa'
  },
  {
    path:'./components/Infokoa.vue',
    name: 'Info',
    component: 'Infokoa'
  },
  {
    path: './components/comun/Footerkoa.vue',
    name: 'Footer',
    component: 'Footer'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
