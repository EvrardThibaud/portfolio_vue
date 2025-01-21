<script setup>
import { ref } from "vue";
import Skill from "./Skill.vue";
const skillsContainer = ref(null);
const viewMoreContent = ref("more");
const skills = ref(JSON.parse(localStorage.getItem('skills')) || []);

function handleViewMoreSkills() {
  skillsContainer.value.classList.toggle("h-20");
  skillsContainer.value.classList.toggle("overflow-hidden");
  viewMoreContent.value = viewMoreContent.value === "more" ? "less" : "more";
}
</script>

<template>
  <div class="card">
    <p class="text-2xl font-semibold leading-7">My Skills</p>
    <div
      id="skillsContainer"
      ref="skillsContainer"
      class="flex flex-wrap gap-2 py-2 px-1 h-20 overflow-hidden mt-6"
    >
      <div class="flex-1" v-for="(skill, index) in skills" :key="index">
        <Skill :skill="skill"></Skill>
      </div>
      <p>sass</p>
      <p>c</p>
      <p>tailwind</p>
      <p>wordpress</p>
      <p>figma</p>
    </div>

    <p class="hover w-fit" @click="handleViewMoreSkills">
      View {{ viewMoreContent }}
      <i
        :class="
          viewMoreContent === 'more'
            ? 'fa-solid fa-angles-down'
            : 'fa-solid fa-angles-up'
        "
      ></i>
    </p>
  </div>
</template>

<style scoped></style>
