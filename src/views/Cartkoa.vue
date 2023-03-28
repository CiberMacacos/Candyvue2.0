<script>
import Breadcrumb from '../components/Breadcrumb.vue'
export default {
  name: 'Cart'
}
</script>

<template>
<!--Productos-->
  <div class="bg-pink-50 md:rounded-lg w-full h-auto flex flex-col">
    <div class="mx-10 mt-10">
    <div id="productsCart" class="bg-white w-full rounded-lg flex flex-col md:gap-8"></div>
    <!--Subtotal productos-->
    <div class="flex flex-col w-100% h50 gap-4 md:items-end font-bold my-4 md:m-10">
      <div id="totalize" class="font-bold text-center"></div>
      <div
        class="flex justify-end sm:items-center md:gap-10 gap-2 md:flex-row flex-col rounded-lg font-bold text-sm md:text-lg">
        <button id="payment" class="bg-blue-500 hover:bg-blue-700 text-white font-bold sm:py-1 px-2 py-2 px-4 rounded-full">Pagar</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold sm:py-1 px-2 py-2 px-4 rounded-full"><a href="productList.html">Seguir Comprando</a></button>
        <button id="clear" class="bg-blue-500 hover:bg-blue-700 text-white font-bold sm:py-1 px-2 py-2 px-4 rounded-full">Vaciar Carrito</button>
      </div>
    </div>
  </div>
  </div>
</template>
