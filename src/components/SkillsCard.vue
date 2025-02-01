<script setup>
import Skill from "./Skill.vue";
import { ref, watch } from "vue";
import { onMounted } from "vue";

const skills = ref(JSON.parse(localStorage.getItem("skills")) || []);
const skillsContainer = ref(null);
const viewMore = ref(null);

watch(viewMore, (newValue) => {
  localStorage.setItem("viewMore", newValue);
});

onMounted(() => {
  viewMore.value = JSON.parse(localStorage.getItem("viewMore")) || false;
});

function handleViewMoreSkills() {
  viewMore.value = !viewMore.value;
  setTimeout(() => {
    const skillsCard = document.getElementById("skills_card");
    console.log(skillsCard);
    if (skillsCard) {
      skillsCard.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, 100); 
}
</script>

<template>
  <div class="card" id="skills_card">
    <p class="text-2xl font-semibold leading-7">My Skills</p>
    <div
      id="skillsContainer"
      ref="skillsContainer"
      :class="[
        'flex flex-wrap gap-2 py-2 px-1 mt-6',
        viewMore ? '' : 'h-20 overflow-hidden',
      ]"
    >
      <template v-for="(skill, index) in skills" :key="index">
        <Skill class="flex-1" :skill="skill"></Skill>
      </template>
    </div>

    <p class="hover w-fit" @click="handleViewMoreSkills">
      View {{ viewMore ? "Less" : "More" }}
      <i
        :class="viewMore ? 'fa-solid fa-angles-up' : 'fa-solid fa-angles-down'"
      ></i>
    </p>
  </div>
</template>

<style scoped></style>
