<script>
import { mapActions } from 'pinia'
import { useCartProducts } from '../CartStore.js'

export default {
  name: 'SuccessPay',
  methods: {
    ...mapActions(useCartProducts, ['restartCart']),
    start() {
      this.$confetti.start({
        particles: [
        {
            type: 'image',
            url: 'assets/logos/koa.png',
            size: 20,
            dropRate: 5,
            particlesPerFrame: 6
          },
          {
            type: 'rect',
            colors: [
              'orangered',
              'darkturquoise',
              'gold',
              'palegreen',
              'mediumvioletred'
            ],
            size: 15,
            particlesPerFrame: 25,
            dropRate: 7
          },
        ]
      },
        setTimeout(() => {
          this.$confetti.stop();
        }, "1000"))
    }
  },
  mounted() {
    this.restartCart();
  }
}
</script>

<template>
  <div class="bg-blue-50 w-full h-full">
    <div class="flex flex-col justify-center items-center gap-4">
      <div class="flex flex-row mt-10">
        <img class="w-12 md:w-20" src="/assets/icon/conf1.png" alt="Confeti" />
        <img class="w-12 md:w-20" src="/assets/icon/conf2.png" alt="Confeti" />
      </div>
      <h1 class="font-bold md:text-4xl">¡Enhorabuena!</h1>
      <h2 class="md:text-2xl">Tu pago se ha realizado con éxito.</h2>
      <div class="flex flex-row items-center text-center gap-2 mx-2">
        <img class="w-8 md:w-10" src="/assets/icon/candy3.webp" alt="Candy" />
        <h2 class="md:text-2xl">Gracias por comprar en CandyKoa</h2>
        <img class="w-8 md:w-10" src="/assets/icon/candy3.webp" alt="Candy" />
      </div>
    </div>
    <div class="flex flex-col gap-6 md:gap-10 justify-center items-center">
      <img class="w-36 md:w-64" src="/assets/logo-letras.png" alt="Logo" />
      <div class="flex flex-row justify-center items-center gap-4 mb-20">
        <img src="/assets/icon/arrow_curve.png" alt="Click aquí" class="w-10 md:w-20" />
        <router-link to="/">
          <button @click="start"
            class="bg-red-100 lg:hover:bg-pink-800 lg:hover:text-white md:p-5 md:text-2xl lg:text-2xl p-3 rounded-full">Página
            principal</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

