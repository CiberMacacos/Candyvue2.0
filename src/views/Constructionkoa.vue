<script>
export default {
  name: 'Construction',
  methods: {
    goToTop() {
      window.scroll(0, 0);
    },
  },
}
</script>

<template>
  <div class="bg-cyan-50 bg-cover w-full h-full">
    <div class="flex flex-col items-center h-full">
      <div class=" my-10">
        <img src="/assets/logo-enconstruccion.png" alt="CandyKoa" class="w-64 md:w-80">
      </div>
      <div class="flex flex-col gap-3 text-center mx-2 mb-20 md:gap-5">
        <h2 class="text-center text-3xl md:text-6xl font-semibold">En construcción</h2>
        <p class="md:text-3xl">¡Lo sentimos! Parece que CandyKoa se ha echado una siesta...</p>
        <br>
        <router-link to="/" class="flex flex-row justify-center items-center gap-4" @click="goToTop">
          <img src="/assets/icon/arrow_curve.png" alt="Click aquí" class="w-12 md:w-24">
          <span class="bg-red-100 lg:hover:bg-pink-800 lg:hover:text-white md:p-5 md:text-3xl p-3 rounded-lg">Página
            principal</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
