<script setup lang="ts">
</script>

<template>
  <nav class="flex items-center fixed h-full w-auto left-0 top-0 p-16">
    <div class="flex flex-col gap-2">
      <RouterLink :to="{ name: 'home' }" class="hover"> Home </RouterLink>
      <RouterLink :to="{ name: 'projects' }" class="hover">
        Projects
      </RouterLink>
      <RouterLink :to="{ name: 'skills' }" class="hover"> Skills </RouterLink>
      <RouterLink :to="{ name: 'design' }" class="hover">
        Graphic Design
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.hover:hover {
  transform: translateX(0.4rem);
}
</style>
