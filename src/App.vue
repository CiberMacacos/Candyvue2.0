<script>
import Header from './components/Headerkoa.vue'
import Footer from './components/Footerkoa.vue'
import { useProductStore } from './productsStore.js'
import { mapActions,mapState } from 'pinia'


export default{
 async created() {
  console.log("holaaaa")
    await this.getData()
   },

   components:{
    Header, Footer
   },
   methods: {
    ...mapActions(useProductStore,['getData'])
   },
   computed: {
    ...mapState(useProductStore,['productList'])
   },
 }

</script>

<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>
