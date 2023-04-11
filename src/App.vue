<script>
import Header from './components/Headerkoa.vue'
import Footer from './components/Footerkoa.vue'
import { useProductStore } from './productsStore.js'


export default{
 mounted() {
    const prod = useProductStore()
    prod.getData()
    console.log(prod.productList)
   },
   
   components:{
    Header, Footer
   }
 }
 
</script>

<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>
