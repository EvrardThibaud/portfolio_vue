<script setup>
import { defineProps, ref } from "vue";
const projects = ref(JSON.parse(localStorage.getItem("projects")) || []);

const props = defineProps({
  skill: Object,
});
</script>

<template>
  <div class="skill_card card">
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
          <div class="project_link">
            <p>{{ project.name }}</p>
            <img :src="project.src[0]" alt="" />
          </div>
        </RouterLink>
      </template>
    </template>
  </div>
</template>

<style scoped>
.card{
    height: fit-content;
    background-color: red !important;
}

.project_link {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 20px;
  width: 90%;
}
</style>
