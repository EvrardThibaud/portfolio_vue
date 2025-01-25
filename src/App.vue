<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar></Navbar>
  <main class="flex flex-col items-center mt-16">
    <RouterView></RouterView>
  </main>
  <Footer></Footer>
</template>

<style scoped>
</style>
