<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'DetailProduct',
  components: { Breadcrumbs },

}
</script>

<template>
  <Breadcrumbs :items="[
    {disabled: false, text: 'Principal' , to: '/' },
    {disabled: false, text: 'Japón' , to: '/productlist' },
    {disabled: false, text: 'Producto' , to: '/detailproduct' },
    ]" />
  <!--Info-producto:img, texto, precio-->
  <!--Padre de producto-->
  <div class="sm:w-full md:w-full flex-col items-center inline-flex justify-center md:gap-5 mb-9" id="container">

</div>
<!--Anuncio novedades redes-->
<div
  class="bg-[url('assets/chuches/piruleta3.jpeg')] w-auto lg:w-full h-24 md:h-48 lg:h-88 bg-cover bg-no-repeat object-top flex flex-col items-center justify-center">
  <h1
    class="text-white text-xs sm:text-sm md:text-xl lg:text-4xl text-center md:w-72 lg:w-96 ml-48 md:ml-88 lg:ml-96 mr-1 lg:mt-3">
    ¡Síguenos en nuestras redes y no te pierdas las novedades!
  </h1>
  <a href="https://www.instagram.com/candykoaweb/" target="_blank">
    <img class="w-8 h-auto sm:w-8 md:w-10 sm:h-auto md:h-auto ml-48 md:ml-48 lg:ml-96 lg:mt-1" src="assets/icon/instagram2.jpeg"
      alt="Instagram"/></a>
</div>
<!--Productos recomendados + footer-->
<div class="flex flex-col justify-center items-center gap-6">
  <h1 class="self-start text-sm md:text-lg text-pink-800 font-bold ml-5 mt-5">
    Productos recomendados
  </h1>
  <!--Productos-->
  <div id="recomended"
    class="flex flex-col sm:flex-col lg:flex-row lg:gap-10 gap-7 md:gap-3 md:h-96 lg:mt-5 mb-10 w-auto">
    <!--Productos-->
  </div>
</div>
</template>
