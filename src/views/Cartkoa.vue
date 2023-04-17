<script>
import Breadcrumb from '../components/Breadcrumb.vue'
import { useCartProducts } from '../CartStore.js'
import { mapState, mapActions } from 'pinia'

export default {
  name: 'Cart',
  props: {
    quantity: { type: Number }
  },
  components: { Breadcrumb },
  computed: {
    ...mapState(useCartProducts, ['cartProducts'])
  },
  methods: {
    ...mapActions(useCartProducts, ['addProduct']),
    ...mapActions(useCartProducts, ['decreaseProduct']),
    ...mapActions(useCartProducts, ['removeProduct']),
    ...mapActions(useCartProducts, ['restartCart'])
  },
}
</script>

<template>
  <!--Productos-->
  <div class="bg-pink-50 md:rounded-lg w-full h-auto flex flex-col">
    <div class="mx-10 mt-10">
      <div id="productsCart" class="bg-white w-full rounded-lg flex flex-col md:gap-8">
        <div id="productsCart"
          class="w-full flex justify-around items-center text-center md:gap-4 lg:gap-46 sm:p-4 md:p-6">
          <div class="flex flex-col gap-3 hidden sm:block">
            <h1 class="font-bold sm:text-sm ">Productos</h1>
            <img class="w-12 md:w-28" src="{{ this.cartProducts[i].image }}" alt="{{ this.cartProducts[i].name }}">
          </div>
          <div class="flex flex-col md:gap-3 items-center text-center w-12">
            <h1 class="font-bold text-sm md:text-base">Nombre</h1>
            <h2 class="sm:text-sm sm:gap4">{{ this.cartProducts[i].name }}</h2>
          </div>
          <div class="flex flex-col gap-3 items-center hidden sm:block">
            <h2 class="font-bold text-sm md:text-base">Precio</h2>
            <p class="sm:text-sm">{{ this.cartProducts[i].price }}</p>
          </div>
          <div class="flex flex-col gap-3 items-center">
            <h1 class="font-bold text-sm md:text-base">Cantidad</h1>
            <div class="flex flex-row gap-6">
              <button
                class="bg-pink-300 w-8 h-8 hover:bg-blue-300 text-white font-bold py-2 rounded-full text-sm items-center hidden sm:block">-</button>
              <p class="sm:text-sm">{{ this.cartProducts[i].quantity }}</p>
              <button
                class="bg-pink-300 w-8 h-8 hover:bg-blue-300 text-white font-bold py-2 rounded-full text-sm items-center hidden sm:block">+</button>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <h2 class="font-bold text-sm md:text-base">Total</h2>
            <h2 class="sm:text-sm">{{ this.cartProducts[i].price *
              this.cartProducts[i].quantity }}€</h2>
          </div>
          <div class="flex flex-col items-center">
            <button @click="this.removeProduct()">
              <img class="w-4 sm:w-6 md:w-10" src="assets/icon/basura.png" alt="papelera">
            </button>
          </div>
        </div>
      </div>
      <!--Subtotal productos-->
      <div class="flex flex-col w-100% h50 gap-4 md:items-end font-bold my-4 md:m-10">
        <div id="totalize" class="font-bold text-center"></div>
        <div
          class="flex justify-end sm:items-center md:gap-10 gap-2 md:flex-row flex-col rounded-lg font-bold text-sm md:text-lg">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold sm:py-1 py-2 px-4 rounded-full">Pagar</button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold sm:py-1 py-2 px-4 rounded-full"><a
              href="productList.html">Seguir Comprando</a></button>
          <button @click="this.restartCart()"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold sm:py-1 py-2 px-4 rounded-full">Vaciar
            Carrito</button>
        </div>
      </div>
    </div>
  </div>
</template>
