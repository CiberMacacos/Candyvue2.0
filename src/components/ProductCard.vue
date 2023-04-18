<script>
import { useCartProducts } from '../CartStore'
import { useProductStore } from '../productsStore.js'
import { mapActions, mapState } from 'pinia'
import Popper from 'vue3-popper'


export default {
  name: "ProductCard",
  components: { Popper },
  props: {
    name: { type: String },
    id: { type: Number },
    price: { type: Number },
    image: { type: String },
    code: { type: String }
  },

  data() {
    return {

    }
  },
  methods: {
    ...mapActions(useCartProducts, ['addProduct'])
  },
  computed: {
    ...mapState(useCartProducts, ['cartProducts']),
    ...mapState(useProductStore, ['productList'])
  }

}
</script>

<template>
  <div class="flex flex-row md:flex-col lg:flex-row lg:gap-9 md:gap-3 md:w-48 md:h-48 lg:w-full lg:h-72">
    <div
      class="w-56 flex flex-row md:flex-col lg:flex-col gap-3 items-center border-1 border-gray-100 rounded-lg shadow-lg lg:shadow-xl lg:w-60 lg:h-72 lg:hover:scale-110 md:hover:scale-110 md:hover:ease-linear duration-150 ease-in">
      <img
        class="w-20 h-20 md:w-full md:h-40 lg:w-full lg:h-48 rounded-l-lg md:rounded-t-lg md:rounded-bl-none lg:rounded-t-lg lg:rounded-bl-none"
        :src="image" :alt="name">
      <div class="flex flex-row items-center flex-end justify-end">
        <div class="flex flex-col sm:w-28 md:w-48 lg:p-4 ">
          <router-link :to="`/detailproduct/${id}`">
            <h1 class="w-16 sm:w-16 md:w-auto lg:w-auto ml-2 font-bold text-left text-sm sm:text-sm ">{{ name }}</h1>
          </router-link>
          <h3 class="font-semibold text-xs sm:text-sm ml-2  mb-2">{{ price }}€</h3>
        </div>
        <div class="w-auto flex justify-end ml-3 sm:ml-0 sm:mr-4 md:mr-2 lg:ml-4">
          <Popper hover content="Añadir producto al carrito">
            <button @click="this.addProduct({ name, id, price, image, code })">
              <img class="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 cursor-pointer hover:invert"
                src="/assets/icon/carrito-de-compra-anadir.png" alt="Comprar">
            </button>
          </Popper>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
