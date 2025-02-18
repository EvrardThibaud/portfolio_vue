<script setup>
import { ref } from "vue";
import ProjectCard from "../components/ProjectCard.vue";

const projects = ref(JSON.parse(localStorage.getItem("projects")) || []);
</script>

<template>
  <div class="container">
    <h1 class="text-3xl font-semibold">Projects</h1>
  </div>
  <template v-for="(project, index) in projects" :key="index">
    <ProjectCard class="project_card" :project="project"></ProjectCard>
  </template>
</template>

<style scoped>
@keyframes slide-fade-in {
  from{
    opacity: 0;
    transform: translateY(40vh);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .project_card{
    view-timeline-name: --item-timeline;
    animation: slide-fade-in both;
    animation-timeline: --item-timeline;
    animatio-range: contain 0% contain 50%;
  }
}
</style>
