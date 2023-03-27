import { createRouter, createWebHistory } from 'vue-router'

import Mainkoa from '../views/Mainkoa.vue'
import Infokoa from '../views/Infokoa.vue'
import Constructionkoa from '../views/Constructionkoa.vue'
import Footerkoa from '../components/Footerkoa.vue'


const routes = [
  {
    path:'/',
    name: 'Home',
    component: Mainkoa
  },
  {
    path:'/info',
    name: 'Info',
    component: Infokoa
  },
  {
    path:'/construction',
    name: 'Construction',
    component: Constructionkoa
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
