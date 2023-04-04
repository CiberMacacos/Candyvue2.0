<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import ProductCard from '../components/ProductCard.vue';
import json from "../assets/products.json";
export default {
  name: 'ProductList',
  components: { Breadcrumbs, ProductCard },
  data(){
    return{
      products:[]
    }
  },
  methods: {
    getProducts() {
      const products=[]
      for(let i=0; i<json.length; i++){
        products.push(json[i])
      }
      this.products=products
      console.log(products)
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>

<template>
  <Breadcrumbs :items="[
    {disabled: false, text: 'Principal' , to: '/' },
    {disabled: false, text: 'Japón' , to: '/productlist' },
    {disabled: false, text: 'Producto' , to: '/detailproduct' },
    ]" />
  <!-- Tarjetas de Productos -->
  <div class="flex justify-center lg:justify-center">
    <div
      class="grid grid-col-1 justify-center sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-24 lg:w-7/12 md:gap-14 lg:my-16 mx-8 my-16"
      id="container">
      <ProductCard v-for="product in products" :name="product.name" :id="product.id" :image="product.image" :price="product.price"/>
  </div>
  </div>
</template>
