<template>
  <div class="w-full flex justify-around items-center text-center md:gap-4 lg:gap-46 sm:p-4 md:p-6">
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
</template>

<script>
export default {

}
</script>

<style>
</style>
