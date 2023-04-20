<script>
export default {
  name: 'ErrorPay',
  methods: {
    goToTop() {
      window.scroll(0, 0);
    },
  },
}
</script>

<template>
  <div class="bg-blue-50 w-full h-full">
    <div class="flex flex-col justify-center items-center gap-4">
      <img class="w-10 md:w-20 mt-10" src="/assets/icon/sad1.png" alt="Confeti" />
      <h1 class="font-bold md:text-4xl">Lo sentimos...</h1>
      <h2 class="md:text-2xl">Ha habido un error en el pago.</h2>
      <div class="flex flex-row gap-2">
        <h2 class="md:text-2xl">¡Vuelve a intentarlo!</h2>
      </div>
    </div>
    <div class="flex flex-col gap-6 md:gap-10 justify-center items-center">
      <img class="w-36 md:w-64" src="/assets/logo-letras.png" alt="Logo" />
      <div class="flex flex-row justify-center items-center mb-20 gap-4">
        <img src="/assets/icon/arrow_curve.png" alt="Click aquí" class="w-10 md:w-20" />
        <router-link to="/cart"
          class="bg-red-100 lg:hover:bg-pink-800 lg:hover:text-white md:p-5 md:text-2xl lg:text-2xl p-3 rounded-full" @click="goToTop">Ir al carrito</router-link>
      </div>
    </div>
  </div>
</template>

<style>
</style>
