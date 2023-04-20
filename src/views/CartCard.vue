<script>
import { mapActions } from 'pinia';
import { useCartProducts } from '../CartStore.js';
import Popper from 'vue3-popper';

export default {
  name: 'CartCard',
  components: { Popper },
  props: {
    image: { type: String },
    name: { type: String },
    price: { type: Number },
    id: { type: Number },
    quantity: { type: Number },
    total: { type: Number },
    code: { type: String }
  },
  methods: {
    ...mapActions(useCartProducts, ['increaseProduct']),
    ...mapActions(useCartProducts, ['decreaseProduct']),
    ...mapActions(useCartProducts, ['removeProduct'])
  },
}
</script>


<template>
  <div class="w-full flex justify-around items-center text-center md:gap-4 lg:gap-46 sm:p-4 md:p-6">
    <div class="flex flex-col gap-3 hidden sm:block">
      <h1 class="font-bold sm:text-sm ">Productos</h1>
      <img class="w-12 md:w-28" :src="image" :alt="name">
    </div>
    <div class="flex flex-col md:gap-3 items-center text-center w-12">
      <h1 class="font-bold text-sm md:text-base">Nombre</h1>
      <h2 class="sm:text-sm sm:gap4">{{ name }}</h2>
    </div>
    <div class="flex flex-col gap-3 justify-center items-center hidden sm:block">
      <h2 class="font-bold text-sm md:text-base">Precio</h2>
      <p class="sm:text-sm">{{ price }}€</p>
    </div>
    <div class="flex flex-col gap-3 items-center">
      <h1 class="font-bold text-sm md:text-base">Cantidad</h1>
      <div class="flex flex-row justify-center items-center lg:gap-6 md:gap-4 sm:gap-4 gap-2">
        <Popper hover content="Disminuir cantidad de producto">
          <button @click="this.decreaseProduct({ id })"
            class="flex justify-center bg-pink-300 lg:w-8 lg:h-8 md:w-7 md:h-7 sm:w-4 sm:h-4 w-5 h-5 hover:bg-blue-300 text-white font-bold py-2 rounded-full text-sm items-center">-</button>
        </Popper>
        <p class="sm:text-sm">{{ quantity }}</p>
        <Popper hover content="Aumentar cantidad de producto">
          <button @click="this.increaseProduct({ id })"
            class="flex justify-center bg-pink-300 lg:w-8 lg:h-8 md:w-7 md:h-7 sm:w-4 sm:h-4 w-5 h-5 hover:bg-blue-300 text-white font-bold py-2 rounded-full text-sm items-center">+</button>
        </Popper>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <h2 class="font-bold text-sm md:text-base">Total</h2>
      <h2 class="sm:text-sm">{{ total }}€</h2>
    </div>
    <div class="flex flex-col justify-center items-center">
      <Popper hover content="Eliminar producto">
        <button @click="this.removeProduct({ id })">
          <img class="w-6 sm:w-6 md:w-10" src="/assets/icon/basura.png" alt="papelera">
        </button>
      </Popper>
    </div>
  </div>
</template>
