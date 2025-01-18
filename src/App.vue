<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar></Navbar>
  <main class="flex flex-col  items-center">
    <RouterView></RouterView>
  </main>
</template>

<style scoped></style>
