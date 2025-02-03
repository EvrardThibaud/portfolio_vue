<script setup>
import { defineProps, ref } from "vue";
const projects = ref(JSON.parse(localStorage.getItem("projects")) || []);

const props = defineProps({
  skill: Object,
});
</script>

<template>
  <p>{{ skill.name }}</p>
  <template v-for="(project, index) in projects" :key="index">
    <template v-if="project.skills.includes(skill.name)">
      <RouterLink
        :to="{
          name: 'project',
          params: {
            id: project.id,
          },
        }"
        :style="{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${project.src[0]})`,
        }"
      >
        <div>
          <p>{{ project.name }}</p>
          <img :src="project.src[0]" alt="" />
        </div>
      </RouterLink>
    </template>
  </template>
</template>

<style scoped></style>
