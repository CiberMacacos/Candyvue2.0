<script>
import Breadcrumbs from '../components/Breadcrumbs.vue'
import { useCartProducts } from '../CartStore.js'
import { mapState, mapActions } from 'pinia'
import CartCard from './CartCard.vue'
import Popper from 'vue3-popper'

export default {
  name: 'Cart',
  components: { Breadcrumbs, CartCard, Popper },
  computed: {
    ...mapState(useCartProducts, ['cartProducts'])
  },
  methods: {
    ...mapActions(useCartProducts, ['restartCart']),
    ...mapActions(useCartProducts, ['payProducts'])
  },
}
</script>

<template>
  <!--Productos-->
  <div class="bg-pink-50 md:rounded-lg w-full h-auto flex flex-col">
    <div class="mx-10 mt-10">
      <div class="bg-white w-full rounded-lg flex flex-col md:gap-8">
        <CartCard v-for="item in this.cartProducts" :id="item.id" :image="item.image" :name="item.name"
          :price="item.price" :quantity="item.quantity" :code="item.code"
          :total="Number(item.price * item.quantity).toFixed(2)" />
      </div>
      <!--Subtotal productos-->
      <div class="flex flex-col w-100% h50 gap-4 md:items-end font-bold my-4 md:m-10">
        <div id="totalize" class="font-bold text-center text-2xl">Total: {{ this.cartProducts.reduce((acc, item) =>
          Number((acc
            += item.price * item.quantity)).toFixed(2), 0) }}€</div>
        <div
          class="flex justify-end sm:items-center md:gap-10 gap-2 md:flex-row flex-col rounded-lg font-bold text-sm md:text-lg">
          <Popper hover content="Ir a la pasarela de pago">
            <button @click="this.payProducts"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold sm:py-1 py-2 px-4 rounded-full">Pagar</button>
          </Popper>
          <Popper hover content="Ir a la página principal"><button><router-link to="/"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold sm:py-1 py-2 px-4 rounded-full">Seguir
                Comprando</router-link></button></Popper>
          <Popper class="text-pink-400" hover content="Eliminar todos los productos">
            <button @click="this.restartCart"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold sm:py-1 py-2 px-4 rounded-full">Vaciar
              Carrito</button>
          </Popper>
        </div>
      </div>
    </div>
  </div>
</template>
