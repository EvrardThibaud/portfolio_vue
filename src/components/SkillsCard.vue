<script setup>
import Skill from "./Skill.vue";
import { ref, watch } from "vue";

const skills = ref(JSON.parse(localStorage.getItem("skills")) || []);
const skillsContainer = ref(null);
const viewMore = ref(localStorage.getItem("viewMore") || "false");

function handleViewMoreSkills() {
  skillsContainer.value.classList.toggle("h-20");
  skillsContainer.value.classList.toggle("overflow-hidden");
}

watch(viewMore, (newValue) => {
  localStorage.setItem("viewMore", newValue);
});
</script>

<template>
  <div class="card">
    <p class="text-2xl font-semibold leading-7">My Skills</p>
    <div
      id="skillsContainer"
      ref="skillsContainer"
      :class="[
        'flex flex-wrap gap-2 py-2 px-1 mt-6',
        viewMore ? '' : 'h-20 overflow-hidden',
      ]"
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

    <p class="hover w-fit" @click="(viewMore = !viewMore)">
      View {{ viewMore ? 'less' : "more" }}
      <i
        :class="
          viewMore
          ? 'fa-solid fa-angles-up'
          : 'fa-solid fa-angles-down'
        "
      ></i>
    </p>
  </div>
</template>

<style scoped></style>
