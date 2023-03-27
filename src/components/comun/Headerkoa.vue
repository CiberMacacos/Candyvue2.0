<script>
export default {

}
</script>

<template>
  <header class="bg-[url('/assets/chuches/nubes.jpg')] bg-center md:w-auto lg:w-auto w-full h-96 bg-cover
  bg-no-repeat object-top">

    <!--Menú-->
    <nav
      class="flex flex-row min-h-[10vh] md:justify-center md:flex-row justify-between md:items-center w-[100%] mx-auto">
      <div
        class="md:static absolute md:min-h-fit left-0 md:top-[-100%] md:w-auto w-full flex justify-center  items-center px-5 font-bold text-stone-50">
        <!--Categorías menú-->
        <ul
          class="flex md:flex-row flex-row justify-center mt-5 items-center md:items-center md:gap-10 gap-4 text-black">
          <li>
            <div class="flex flex-col text-center items-center">
              <img class="w-9 h-auto" src="assets/icon/japanflag.jpeg" alt="Bandera de Japón">
              <a class="md:hover:text-pink-500" href="productList.html">JAPÓN</a>
            </div>
          </li>
          <li>
            <div class="flex flex-col text-center items-center">
              <img class="w-9 h-auto" src="assets/icon/eeuu.jpeg" alt="Bandera de EEUU">
              <a class="md:hover:text-pink-500" href="construccion.html">EEUU</a>
            </div>
          </li>
          <li>
            <div class="flex flex-col text-center items-center">
              <img class="w-9 h-auto" src="assets/icon/mexico.jpeg" alt="Bandera de México">
              <a class="md:hover:text-pink-500" href="construccion.html">MÉXICO</a>
            </div>
          </li>
          <li>
            <div class="flex flex-col text-center items-center">
              <img class="w-9 h-auto" src="assets/icon/europe.jpeg" alt="Bandera de Europa">
              <a class="md:hover:text-pink-500" href="construccion.html">EUROPA</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <!--Logo CandyKoa del header-->
    <div class="flex flex-col items-center md:items-center md:relative translate-y-12 md:top-4">
      <img class="w-36 h-auto md:w-56 md:h-auto" src="assets/logo-letras.png" alt="Logo">
    </div>
    <div class="flex justify-end my-24 mx-4 md:absolute md:top-5 md:right-5 md:m-0">
      <a href="cart.html"><img id="carrito" class="w-10 h-auto md:w-12" src="assets/icon/carrito.png" alt="carrito"></a>
    </div>
  </header>
</template>
