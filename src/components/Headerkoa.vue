<script>
import { mapActions, mapState } from 'pinia';
import { useCartProducts } from '../CartStore.js';
export default {
  name: 'Header',
  mounted() {

  },
  computed: {
    ...mapState(useCartProducts, ['cartProducts']),
    ...mapState(useCartProducts, ['totalProducts'])
  },
  methods: {

  }
}
</script>

<template>
  <header
    class="bg-[url('/assets/chuches/nubes.webp')] bg-center md:w-auto lg:w-auto w-full h-96 bg-cover
                                                                                                                                                                                                      bg-no-repeat object-top">
    <!--Menú-->
    <nav
      class="flex flex-row min-h-[10vh] md:justify-center md:flex-row justify-between md:items-center w-[100%] mx-auto">
      <div
        class="md:static absolute md:min-h-fit left-0 md:top-[-100%] md:w-auto w-full flex justify-center  items-center px-5 font-bold text-stone-50">
        <!--Categorías menú-->
        <ul class="flex md:flex-row flex-row justify-center mt-5 items-center md:items-center md:gap-10 gap-4 text-black">
          <li>
            <router-link to="/productlist/japan" class="flex flex-col text-center items-center">
              <img class="w-9 h-auto" src="/assets/icon/japanflag.jpeg" alt="Bandera de Japón">
              <span class="md:hover:text-pink-500">JAPÓN</span>
            </router-link>
          </li>
          <li>
            <router-link to="/productlist/eeuu" class="flex flex-col text-center items-center">
              <img class="w-9 h-auto" src="/assets/icon/eeuu.jpeg" alt="Bandera de EEUU">
              <span class="md:hover:text-pink-500">EEUU</span>
            </router-link>
          </li>
          <li>
            <router-link to="/productlist/mexico" class="flex flex-col text-center items-center">
              <img class="w-9 h-auto" src="/assets/icon/mexico.jpeg" alt="Bandera de México">
              <span class="md:hover:text-pink-500">MÉXICO</span>
            </router-link>
          </li>
          <li>
            <router-link to="/productlist/europa" class="flex flex-col text-center items-center">
              <img class="w-9 h-auto" src="/assets/icon/europe.jpeg" alt="Bandera de Europa">
              <span class="md:hover:text-pink-500">EUROPA</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!--Logo CandyKoa del header-->
    <div class="flex justify-center">
    <router-link to="/" class="w-36 h-auto md:w-56 md:h-auto flex flex-col items-center md:items-center md:relative translate-y-12 md:top-4">
      <img class="w-36 h-auto md:w-56 md:h-auto" src="/assets/logo-letras.png" alt="Logo">
    </router-link>
  </div>
    <router-link to="/cart" class="flex justify-end my-24 mx-4 md:absolute md:top-5 md:right-5 md:m-0"><img id="carrito" class="w-10 h-auto md:w-12 bg-white border-2 border-solid border-pink-500 rounded-xl p-2"
        src="/assets/icon/carrito.png" alt="carrito">
      <span class="bg-red-400 flex items-center border-2 border-solid border-pink-500 -translate-x-2  justify-center rounded-xl font-bold p-1 w-6 h-6 text-center">{{ totalProducts }}</span>
    </router-link>
  </header>
</template>

