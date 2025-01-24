<script setup>
import ProjectCard from "./ProjectCard.vue";
import { ref } from "vue";

const projects = ref(JSON.parse(localStorage.getItem("projects")) || []);
</script>

<template>
  <div class="card">
    <p class="text-2xl font-semibold leading-7">My Projects</p>

    <ProjectCard :project="projects[0]"></ProjectCard>
    <ProjectCard :project="projects[2]"></ProjectCard>

    <RouterLink :to="{ name: 'projects' }" class="hover">
      All my projects <i class="fa-solid fa-arrow-right"></i>
    </RouterLink>
  </div>
</template>

<style scoped></style>
