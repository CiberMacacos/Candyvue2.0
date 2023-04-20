<script>
import { useCartProducts } from '../CartStore.js'
import { mapState, mapActions } from 'pinia'
import CartCard from './CartCard.vue'
import Popper from 'vue3-popper'

export default {
  name: 'Cart',
  components: { CartCard, Popper },
  computed: {
    ...mapState(useCartProducts, ['cartProducts']),
  },
  methods: {
    ...mapActions(useCartProducts, ['restartCart']),
    ...mapActions(useCartProducts, ['payProducts']),
    goToTop() {
      window.scroll(0, 0);
    },
  },
}
</script>

<template>
  <!--Productos-->
  <div class="bg-pink-50 md:rounded-lg w-full h-auto flex flex-col">
    <div class="mx-2 mt-4  lg:mx-10 lg:mt-10">
      <div class="bg-white w-full rounded-lg flex flex-col md:gap-8">
        <CartCard
        v-for="item in this.cartProducts"
        :id="item.id"
        :key="item.id"
        :image="item.image"
        :name="item.name"
        :price="Number(item.price).toFixed(2)"
        :quantity="item.quantity"
        :code="item.code"
        :total="Number(item.price * item.quantity).toFixed(2)" />
      </div>
      <!--Subtotal productos-->
      <div class="flex flex-col w-100% h-50 items-center md:items-end lg:items-end xl:items-end font-bold my-4 gap-4 md:m-10">
        <div id="totalize" class="font-bold text-center text-lg md:text-xl lg:text-2xl">Total: {{ Number(this.cartProducts.reduce((acc, item) =>
          (acc += item.price * item.quantity), 0)).toFixed(2) }}€
        </div>
        <div
          class="flex items-center sm:justify-center md:justify-end lg:justify-end xl:justify-end gap-4 md:gap-5 lg:gap-6 flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row rounded-lg font-bold text-sm md:text-lg">
          <Popper hover content="Ir a la pasarela de pago">
            <button @click="this.payProducts"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Pagar</button>
          </Popper>
          <Popper hover content="Ir a la página principal">
            <button>
              <router-link to="/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="goToTop">Seguir Comprando</router-link>
            </button>
          </Popper>
          <Popper class="text-pink-400" hover content="Eliminar todos los productos">
            <button @click="this.restartCart" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Vaciar Carrito</button>
          </Popper>
        </div>
      </div>
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
