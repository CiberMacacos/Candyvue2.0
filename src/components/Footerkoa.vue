<script>
export default {
  name: 'Footer'
}
</script>

<template>
  <!--Footer-->
  <footer class="bg-blue-200 bg-opacity-40 w-auto p-4">
    <div class="md:flex md:justify-between">
      <div class="mb-6 md:mb-0">
        <router-link to="/" class="flex items-center">
          <img src="/assets/logo-letras.png" class="h-32 mr-3" alt="Logo CandyKoa" />
        </router-link>
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 class="mb-6 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 uppercase">Sobre nosotros</h2>
          <ul class="">
            <li class="mb-4">
              <router-link to="/info" class="hover:underline">Quiénes somos</router-link>
            </li>
            <li>
              <router-link to="/productlist/mexico" class="hover:underline">Nuestros productos</router-link>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 uppercase">Síguenos</h2>
          <ul class="">
            <li class="mb-4">
              <a href="https://www.instagram.com/candykoaweb/" target="_blank" class="hover:underline ">Instagram</a>
            </li>
            <li>
              <a href="https://twitter.com/CandyKoa_" target="_blank" class="hover:underline">Twitter</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600 uppercase">Legal</h2>
          <ul class="">
            <li class="mb-4" alt="Política de privacidad">
              <router-link to="/construction" class="hover:underline">Política de privacidad</router-link>
            </li>
            <li class="mb-4" alt="Términos y Condiciones">
              <router-link to="/construction" class="hover:underline">Términos y Condiciones</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-6 border-blue-300 sm:mx-auto lg:my-8"/>
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm sm:text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-cyan-600 to-purple-600">© 2023 <router-link to="../Mainkoa.vue" class="hover:underline">CandyKoa™</router-link>. All Rights Reserved.</span>
      <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <a href="mailto:candykoaweb@gmail.com" target="_blank" class="text-white">
          <img class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" src="/assets/icon/gmail2.jpeg" alt="Gmail"/>
        </a>
        <a href="https://www.instagram.com/candykoaweb/" target="_blank" class="text-white">
          <img class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" src="/assets/icon/instagram2.jpeg"
            alt="Instagram"/>
        </a>
        <a href="https://twitter.com/CandyKoa_" target="_blank" class="text-white">
          <img class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" src="/assets/icon/twitter2.webp" alt="Instagram"/>
        </a>
      </div>
    </div>
  </footer>
</template>
