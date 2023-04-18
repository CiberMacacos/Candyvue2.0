<script>
import Breadcrumbs from '../components/Breadcrumbs.vue'
import { useCartProducts } from '../CartStore.js'
import { mapState, mapActions } from 'pinia'
import CartCard from './CartCard.vue'

export default {
  name: 'Cart',
  components: { Breadcrumbs, CartCard },
  computed: {
    ...mapState(useCartProducts, ['cartProducts'])
  },
  methods: {
    ...mapActions(useCartProducts, ['restartCart'])
  },
}
</script>

<template>
  <!--Productos-->
  <div class="bg-pink-50 md:rounded-lg w-full h-auto flex flex-col">
    <div class="mx-10 mt-10">
      <div class="bg-white w-full rounded-lg flex flex-col md:gap-8">
        <CartCard v-for="item in this.cartProducts" :image="item.image" :name="item.name" :price="item.price"
          :quantity="item.quantity" :total="item.price * item.quantity" />
      </div>
      <!--Subtotal productos-->
      <div class="flex flex-col w-100% h50 gap-4 md:items-end font-bold my-4 md:m-10">
        <div id="totalize" class="font-bold text-center"></div>
        <div
          class="flex justify-end sm:items-center md:gap-10 gap-2 md:flex-row flex-col rounded-lg font-bold text-sm md:text-lg">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold sm:py-1 py-2 px-4 rounded-full">Pagar</button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold sm:py-1 py-2 px-4 rounded-full"><a
              href="productList.html">Seguir Comprando</a></button>
          <button @click="this.restartCart"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold sm:py-1 py-2 px-4 rounded-full">Vaciar
            Carrito</button>
        </div>
      </div>
    </div>
  </div>
</template>
