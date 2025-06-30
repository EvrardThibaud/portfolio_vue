<script setup lang="ts">
import { ref } from "vue";
import ProjectCard from "../components/ProjectCard.vue";

interface Project {
  id: number;
  name: string;
  src: string[];
  skills: string[];
  dsc: string;
  github: string[];
}

const projects = ref<Project[]>(
  JSON.parse(localStorage.getItem("projects") || "[]")
);
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
  0% {
    transform: translateY(30vh);
    opacity: 0;
  }
  100% {
    transform: translateY(0vh);
    /* opacity: 0; */
  }
}

@media (prefers-reduced-motion: no-preference) {
  .project_card {
    view-timeline-name: --item-timeline;
    /* animation: slide-fade-in both; */
    animation-timeline: --item-timeline;
    animatio-range: contain 0% contain 50%;
  }
}
</style>
