<script setup>
import Skill from "./Skill.vue";
import { ref, watch } from "vue";
import { onMounted } from "vue";

const skills = ref(JSON.parse(localStorage.getItem("skills")) || []);
const skillsContainer = ref(null);
</script>

<template>
  <RouterLink :to="{ name: 'skills' }">
    <div class="card">
      <div class="flex justify-between items-center">
        <p class="text-2xl font-semibold leading-7">My Skills</p>
        <p class="hover">
          View all
          <i class="fa-solid fa-arrow-right ml-2"></i>
        </p>
      </div>
      <div
        id="skillsContainer"
        ref="skillsContainer"
        :class="['flex flex-wrap gap-2 py-2 px-1 mt-6']"
      >
        <template v-for="(skill, index) in skills.slice(0, 6)" :key="index">
          <Skill class="flex-1" :skill="skill"></Skill>
        </template>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.card {

  & > div > p > i{ 
    transition: all ease-out 0.3s;
  }

  &:hover {
    & > div > p > i {
      transform: translateX(0.5rem);
    }
  }
}
</style>
