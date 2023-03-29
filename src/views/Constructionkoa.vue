<template>
  <body class="bg-cyan-50 bg-cover w-full h-full">
    <div class="flex flex-col items-center h-full">
      <div class="">
        <img src="assets/logo-enconstruccion.png" alt="CandyKoa" class="w-64 md:w-80">
      </div>
      <div class="flex flex-col gap-3 text-center mx-2 md:gap-5">
        <h2 class="text-center text-3xl md:text-6xl font-semibold">En construcción</h2>
        <p class="md:text-3xl">¡Lo sentimos! Parece que CandyKoa se ha echado una siesta...</p>
        <br>
        <router-link to="/" class="flex flex-row justify-center items-center gap-4">
          <img src="/assets/icon/arrow_curve.png" alt="Click aquí" class="w-12 md:w-24">
          <span class="bg-red-100 lg:hover:bg-pink-800 lg:hover:text-white md:p-5 md:text-3xl p-3 rounded-lg">Página
            principal</span>
        </router-link>
        <div class="flex flex-row self-center md:gap-10 gap-5 mt-5">
          <a href="https://www.instagram.com/candykoaweb/" target="_blank"> <img src="assets/icon/instagram2.jpeg"
              alt="Instagram" class="w-12 md:w-20"></a>
          <a href="mailto:candykoaweb@gmail.com" target="_blank"> <img src="assets/icon/gmail2.jpeg" alt="Gmail"
              class="w-12 md:w-20"></a>
          <a href="https://twitter.com/CandyKoa_" target="_blank"> <img src="assets/icon/twitter2.webp" alt="Twitter"
              class="w-12 md:w-20"></a>
        </div>
      </div>
    </div>
  </body>
</template>
