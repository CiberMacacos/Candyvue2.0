<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import ProductCard from '../components/ProductCard.vue';
import { useProductStore } from "../productsStore.js"
import { mapState } from 'pinia';

export default {

  name: 'ProductList',

  components: { Breadcrumbs, ProductCard },
  props: {
    country: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
    }
  },
  /*updated () {
    breadName:'';
  },*/
  computed: {

    ...mapState(useProductStore, ['productList']),

    filterProductList() {
      return this.productList.filter(product => product.country === this.country)
    },

    breadName(){
      const url = window.location.href
      let name = url.split('/')
      return name[4]
    }
  }
}
</script>

<template>
  <Breadcrumbs :items="[
    { disabled: false, text: 'Principal', to: '/' },
    { disabled: false, text: breadName , to: '' },
  ]" />
  <!-- Tarjetas de Productos -->
  <div class="flex justify-center lg:justify-center">
    <div
      class="grid grid-col-1 justify-center sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-24 lg:w-7/12 md:gap-14 lg:my-16 mx-8 my-16"
      id="container">
      <ProductCard v-for="product in this.filterProductList" :name="product.name" :id="product.id" :image="product.image"
        :price="product.price" />
    </div>
  </div>
</template>
