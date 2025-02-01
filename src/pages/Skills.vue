<script setup>
import Skill from "../components/Skill.vue";
import { ref, watch } from "vue";



const skills = ref(JSON.parse(localStorage.getItem("skills")) || []);

</script>

<template>
  <div class="container">
    <p class="text-3xl font-semibold">My Skills</p>
    <input type="text" placeholder="Search for a skills">
    <div class="flex flex-wrap gap-2 my-4 ">
      <template v-for="(skill, index) in skills" :key="index">
        <Skill
          class="flex-1"
          :skill="skill"
          @click="handleOpenSkill(index)"
        ></Skill>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
