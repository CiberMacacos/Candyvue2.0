<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
export default {
  name: 'ProductList',
  components: { Breadcrumbs },
}
</script>

<template>
  <Breadcrumbs :items="[
    {disabled: false, text: 'Uno' , to: '/ruta/' },
    {disabled: false, text: 'Dos' , to: '/ruta/' },
    {disabled: false, text: 'Tres' , to: '/ruta/' },
    {disabled: false, text: 'Cuatro' , to: '/ruta/' }
    ]" />
  <!-- Tarjetas de Productos -->
  <div class="flex lg:justify-center justify-center">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-24 w-full lg:w-7/12 md:gap-10 lg:mt-16 lg:mb-36 mt-5 mx-10 mb-10"
      id="container">
    </div>
  </div>
</template>
