<script setup>
import { ref } from "vue";
import ProjectCard from "../components/ProjectCard.vue";

const projects = ref(JSON.parse(localStorage.getItem("projects")) || []);
</script>

<template>
  <!-- <h1 class="text-3xl font-semibold">Projects</h1> -->
  <template v-for="(project, index) in projects" :key="index">
    <ProjectCard :project="project"></ProjectCard>
  </template>
</template>

<style scoped></style>
