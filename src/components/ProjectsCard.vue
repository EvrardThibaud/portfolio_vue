<script setup>
import ProjectCard from './ProjectCard.vue';


</script>

<template>
  <div class="card">
    <p class="text-2xl font-semibold leading-7">My Projects</p>

    <ProjectCard :src="'projects/cardsRoyale/screen1.png'" :skills="skills"></ProjectCard>
    
    <RouterLink :to="{ name: 'projects' }" class="hover">
      All my projects <i class="fa-solid fa-arrow-right"></i>
    </RouterLink>
  </div>
</template>

<style scoped></style>
