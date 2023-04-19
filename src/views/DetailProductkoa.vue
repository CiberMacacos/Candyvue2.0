<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import ProductCard from '../components/ProductCard.vue'
import { useProductStore } from '../productsStore'
import { useCartProducts } from '../CartStore'
import { mapState, mapActions } from 'pinia'
import Popper from 'vue3-popper'

export default {
  name: 'DetailProduct',
  components: { Breadcrumbs, ProductCard, Popper },
  props: {
    id: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      data: ''
    }
  },
  beforeMount() {
    const filtered = this.productList.filter(product => product.id == this.id)
    this.data = filtered[0]
  },
  computed: {
    ...mapState(useProductStore, ['productList']),
    getRandomProduct() {
      if (!this.productList || this.productList.length === 0) {
        return []
      }
      const chosenProducts = [];
      const chosenNumbers = [];

      while (chosenNumbers.length <= 3) {

        let randomNumber = Math.floor(Math.random() * 36);

        if (!chosenNumbers.includes(randomNumber)) {
          chosenNumbers.push(randomNumber);
          chosenProducts.push(this.productList[randomNumber]);
        }
      }
      console.log(this.productList)
      console.log("chosenproducts" + chosenProducts)
      return chosenProducts
    },
    ...mapState(useCartProducts, ['cartProducts'])
  },
  methods: {
    ...mapActions(useCartProducts, ['addProduct'])
  },

}

</script>

<template>
  <Breadcrumbs :items="[
    { disabled: false, text: 'Principal', to: '/' },
    { disabled: false, text: 'Japón', to: '/productlist' },
    { disabled: false, text: 'Producto', to: '/detailproduct' },
  ]" />
  <!--Info-producto:img, texto, precio-->
  <div class="sm:w-full md:w-full flex-col items-center inline-flex justify-center md:gap-5 mb-9" id="container">
    <div class="w-full h-full flex flex-col md:flex-row items-center border-blue-800 max-w-xl gap-5">
      <div class="w-auto h-auto md:w-full md:h-auto bg-transparent items-center">
        <img class="w-56 h-auto md:w-auto md:h-auto" :src=this.data.image alt="this.data.name">
      </div>
    </div>
    <div class="justify-center">
      <p class="font-bold">{{ this.data.name }}</p>
      <p class="text-center">{{ Number(this.data.price).toFixed(2) }} €</p>
    </div>
    <div class="bg-blue-50 w-auto md:p-4 flex flex-col items-center border-blue-800 max-w-xl hover:bg-pink-50 gap-5">
      <div class="flex flex-col justify-between p-4 leading-normal text-justify">
        <p class="mb-3 font-normal text-sm md:text-2xl text-black">{{ this.data.description }}</p>
        <p class="md:mb-3 font-normal text-sm md:text-xl text-black">Ingredientes: {{ this.data.ingredients }}</p>
        <p class="mb-3 md:font-normal text-sm md:text-xl text-black">Alérgenos: {{ this.data.allergens }}</p>
      </div>
      <Popper hover class="arrow" content="Añadir producto al carrito">
        <button @click="this.addProduct(this.data)"><img
            class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 cursor-pointer hover:invert"
            src="/assets/icon/carrito-de-compra-anadir.png" alt="Comprar"></button>
      </Popper>
    </div>
  </div>


  <!--Anuncio novedades redes-->
  <div
    class="bg-[url('assets/chuches/piruleta3.jpeg')] w-auto lg:w-full h-24 md:h-48 lg:h-88 bg-cover bg-no-repeat object-top flex flex-col items-center justify-center">
    <h1
      class="text-white text-xs sm:text-sm md:text-xl lg:text-4xl text-center md:w-72 lg:w-96 ml-48 md:ml-88 lg:ml-96 mr-1 lg:mt-3">
      ¡Síguenos en nuestras redes y no te pierdas las novedades!
    </h1>
    <a href="https://www.instagram.com/candykoaweb/" target="_blank">
      <img class="w-8 h-auto sm:w-8 md:w-10 sm:h-auto md:h-auto ml-48 md:ml-48 lg:ml-96 lg:mt-1"
        src="assets/icon/instagram2.jpeg" alt="Instagram" /></a>
  </div>
  <!--Productos recomendados + footer-->
  <div class="flex flex-col justify-center items-center gap-6">
    <h1 class="self-start text-sm md:text-lg text-pink-800 font-bold ml-5 mt-5">
      Productos recomendados
    </h1>
    <!--Productos-->
    <div id="recomended"
      class="flex flex-col sm:flex-col lg:flex-row lg:gap-10 gap-7 md:gap-3 md:h-96 lg:mt-5 mb-10 w-auto">
      <!--Productos-->
      <ProductCard v-if="getRandomProduct" v-for="product in getRandomProduct" :name="product.name" :id="product.id"
        :image="product.image" :price="product.price" />
    </div>
  </div>
</template>

<style>
:root {
  --popper-theme-background-color: #a00959;
  --popper-theme-background-color-hover: #a00959;
  --popper-theme-text-color: #ffffff;
  --popper-theme-border-width: 0px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 8px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>
