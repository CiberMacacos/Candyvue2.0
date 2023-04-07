<script>
import Header from './components/Headerkoa.vue'
import Footer from './components/Footerkoa.vue'
import router from './router/router.js'
import { useProductStore } from './productsStore.js'


export default{
 mounted() {
    const prod = useProductStore()
    prod.getData()

   },
   
   components:{
    Header, Footer
   }
 }
 
</script>

<template>
  <div>
    <Header/>
    <router/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>
