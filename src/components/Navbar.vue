<script setup></script>

<template>
  <nav class="bg-base-100/50 h-16 flex justify-center fixed top-0 w-full z-10 backdrop-blur-xl">
    <div class="container flex items-center justify-center gap-8 ">
      <RouterLink :to="{ name: 'home' }" class="hover"> Home </RouterLink>
      <RouterLink :to="{ name: 'projects' }" class="hover"> Projects </RouterLink>
    </div>
  </nav>
</template>

<style scoped></style>
