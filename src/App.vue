<script setup>
import Header from './components/Headerkoa.vue'
import Footer from './components/Footerkoa.vue'
import router from './router/router.js'
</script>

<template>
  <div>
    <Header />
    <router />
    <router-view></router-view>
    <Footer />
  </div>
</template>
