<script setup>
import { defineProps, ref, computed } from "vue";
import Skill from "./Skill.vue";
const skills = JSON.parse(localStorage.getItem("skills")) || [];
const filteredSkills = computed(() => {
  return props.project.skills
    .map((projectSkill) => skills.find((skill) => skill.name === projectSkill))
    .filter((skill) => skill !== undefined);
});

const props = defineProps({
  project: Object,
});
</script>

<template>
  <RouterLink
    :to="{
      name: 'project',
      params: {
        id: props.project.id,
      },
    }"
    class="project_card"
    :style="{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${props.project.src[0]})`,
    }"
  >
    <div class="visible">
      <p class="text-xl font-bold">{{ project.name }}</p>
      <div
        class="flex justify-center items-center flex-row flex-wrap gap-2 mt-2 w-full"
      >
        <template
          v-for="(skill, index) in filteredSkills.slice(0, 3)"
          :key="index"
        >
          <Skill class="flex-1 backdrop-blur-md" :skill="skill"></Skill>
        </template>
      </div>
    </div>

    <div class="button">More info</div>
  </RouterLink>
</template>

<style scoped>
.project_card {
  display: flex;
  justify-content: end;
  flex-direction: column;
  gap: 1rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  height: 18rem;
  width: 500px;
  max-width: min(100%, 90vw);
  padding: 2rem;
  box-shadow: 0px 0px 1px rgba(255, 255, 255, 0.606);
  margin: 5vh 0;
  border-radius: 8px;
  transform-origin: center center 0px;
  transition: all 0.5s ease-out;
  animation-duration: 3s;
  position: relative;
  cursor: pointer;

  .visible {
    transform: translateY(100%);
    transition: transform 0.5s ease;
  }

  & .button {
    transform: translateY(100%);
    opacity: 0;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  &:hover {
    .visible {
      transform: translateY(0%);
    }

    & .button {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>
