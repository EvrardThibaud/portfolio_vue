<script setup>
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import Skill from "../components/Skill.vue";

const route = useRoute();

const projects = JSON.parse(localStorage.getItem("projects")) || [];
const project = computed(() => {
  return projects.find((proj) => proj.id == route.params.id);
});

const skills = JSON.parse(localStorage.getItem("skills")) || [];
const filteredSkills = computed(() => {
  if (!project.value) return [];

  return skills.filter((skill) =>
    project.value.skills.some((projectSkill) => projectSkill === skill.name)
  );
});
</script>

<template>
  <div class="container">
    <p>{{ project.name }}</p>
    <p>{{ project.dsc }}</p>

    <template v-for="(skill, index) in filteredSkills" :key="index">
      <Skill class="backdrop-blur-md" :skill="skill"></Skill>
    </template>

    <template v-for="(link, index) in project.github" :key="index">
      <a :href="link" target="_blank" class="text-2xl flex">
        <div class="button">
          <p>Rep {{ index + 1 }}</p>
          <i class="fa-brands fa-github"></i>
        </div>
      </a>
    </template>
    <template v-for="(src, index) in project.src" :key="index">
      <img :src="src" :alt="project.name + ' ' + index" />
    </template>
  </div>
</template>

<style scoped>
.container {
  width: 500px;
  max-width: 90vw;
}
</style>
