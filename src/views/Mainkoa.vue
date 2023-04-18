<script>
import ProductCard from '../components/ProductCard.vue'
import { useProductStore } from '../productsStore';
import { mapState } from 'pinia';
export default {
  name: 'Home',

  components: {ProductCard},
  data() {
    return {
    }
  },
  computed: {
    ...mapState(useProductStore,['productList']),
    getRandomProduct(){
    if(!this.productList||this.productList.length===0){
      return []
    }
  const chosenProducts=[];
  const chosenNumbers=[];

  while (chosenNumbers.length<=3) {

  let randomNumber = Math.floor(Math.random()*36);

  if(!chosenNumbers.includes(randomNumber)){
    chosenNumbers.push(randomNumber);
    chosenProducts.push(this.productList[randomNumber]);
      }
    }
    console.log(this.productList)
    console.log("chosenproducts"+chosenProducts)
    return chosenProducts
    }
  },

}
</script>

<template>
  <!--Fondo fresas-->
  <div class="bg-[url('/assets/chuches/fresa.webp')] bg-center lg:mt-5 md:w-auto sm:w-full md:h-72 h-36 bg-cover
  bg-no-repeat object-top flex flex-col items-center justify-center">
    <div class="flex flex-col gap-5 md:gap-20">
      <p class="text-center font-bold lg:text-4xl md:text-2xl text-white p-1 rounded-xl bg-pink-600 bg-opacity-50">
        ¡La desconexión que necesitas a sólo un click!
      </p>
      <div class="flex flex-row justify-center items-center gap-2 md:justify-center md:items-center">
        <router-link to="/productlist/japan"
          class="flex md:items-center bg-pink-600 rounded-lg p-1 font-bold text-white md:hover:bg-pink-900 md:h-7 md:p-5 text-sm md:text-2xl">¡Quiero
          verlo!</router-link>
        <img src="assets/icon/mouse-click-icon.svg" class="w-6 md:hover:animate-ping" alt="Flecha">
      </div>
    </div>
  </div>
  <!--Entrada 1 con fotos e iconos-->
  <div
    class="flex md:flex-row lg:flex-row md:mt-10 md:mb-10 md:p-10 lg:m-24 m-4 md:gap-5 lg:gap-28 gap-2 mx-2 w-auto md:w-auto">
    <!--Imágenes-->
    <div class="grid grid-cols-2 lg:gap-6 gap-2 md:gap-2 w-44 md:w-72 lg:w-1/2">
      <img
        class=" hidden md:block col-span-2 object-cover h-20 md:h-48 w-full lg:w-full"
        src="assets/productos/chewchew.jpeg" alt="Hi-Chew">

      <img
        class="md:hidden col-span-2 object-cover h-20 md:h-48 w-full lg:w-full"
        src="assets/chuches/movil/hi-chew-m.webp" alt="Hi-Chew">

      <img
        class=" hidden md:block h-full md:h-32 h-24 w-full lg:h-60 w-120 object-cover"
        src="assets/chuches/halloween.webp" alt="Chocolate">
      <img
        class=" md:hidden h-full md:h-32 h-24 w-full lg:h-60 w-120 object-cover"
        src="assets/chuches/movil/halloween.webp" alt="Chocolate">
      <img
        class="hidden md:block md:h-32 h-24 w-36 lg:w-full lg:h-60 object-cover"
        src="assets/chuches/chuches.webp" alt="Moras">
      <img
        class="md:hidden md:h-32 h-24 w-36 lg:w-full lg:h-60 object-cover"
        src="assets/chuches/movil/chuches-m.webp" alt="Moras">
    </div>
    <!--Texto e iconos-->
    <div class="flex items-center w-1/2 md:w-auto">
      <ul class="flex flex-col lg:gap-28 md:gap-4 gap-2 w-full">
        <li class="flex items-center md:gap-10 gap-2">
          <img src="assets/icon/world.webp" alt="Mundo" class="md:w-12 w-6">
          <p class="lg:text-3xl md:text-xl text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600">Dulces de distintas partes del mundo</p>
        </li>
        <li class="flex items-center md:gap-10 gap-2">
          <img src="assets/icon/delivery-4.jpeg" alt="Entrega" class="md:w-12 w-6">
          <p class="lg:text-3xl md:text-xl text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600">Envíos a toda España (Canarias incluidas)</p>
        </li>
        <li class="flex items-center md:gap-10 gap-2">
          <img src="assets/icon/oferta2.jpeg" alt="Oferta" class="md:w-12 w-6">
          <p class="lg:text-3xl md:text-xl text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600">¡Regístrate y recibe ofertas y descuentos especiales!</p>
        </li>
      </ul>
    </div>
  </div>
  <!--Sección alérgenos-->
  <div
    class="bg-red-100 bg-opacity-40 w-full md:h-60 h-12 flex flex-col justify-center items-center gap-3 md:gap-9 py-32 md:py-52">
    <h1 class="text-sm text-center m-5 md:text-xl lg:text-2xl"> ¿Tienes algún tipo de alergia o intolerancia? Pensamos
      en ti. Busca las etiquetas en todos nuestros productos.</h1>
    <h2 class="text-sm text center md:text-2xl lg:text-3xl font-bold text-rose-900">Lo primero eres tú.</h2>
    <div class="flex flex-row lg:w-12 md:w-10 w-6 items-center justify-center gap-8 sm:gap-10 md:gap-20 mt-4 md:mt-9">
      <!--Iconos alérgenos-->
      <img src="assets/icon/avellana.jpeg" alt="Avellana">
      <img src="assets/icon/azucar.webp" alt="Azúcar">
      <img src="assets/icon/cacahuete.webp" alt="Cacahuete">
      <img src="assets/icon/huevos.jpeg" alt="Huevos">
      <img src="assets/icon/leche.jpeg" alt="Leche">
    </div>
  </div>
  <!--Sección productos recomendados-->
  <!--Título-->
  <div class="flex flex-col justify-center items-center m-5 gap-6 md:m-10">
    <h1 class="self-start text-sm md:text-lg md:text-pink-800 font-bold">Productos recomendados</h1>
    <!--Productos-->
    <div id="recomended"
    class="grid w-full md:grid-cols-2 lg:grid-cols-4 gap-5 md:w-5/6 md:gap-24 lg:w-auto lg:gap-10 py-5 md:py-12 lg:py-16 justify-center">
    <!--Productos-->
    <ProductCard v-if="getRandomProduct" v-for="product in getRandomProduct" :name="product.name" :id="product.id" :image="product.image"
    :price="product.price" />
  </div>
</div>
<!--Script de Javascript para el menú de móvil - No funciona aún-->
</template>
