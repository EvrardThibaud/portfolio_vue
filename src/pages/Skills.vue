<script setup>
import Skill from "../components/Skill.vue";
import { ref, watch } from "vue";

const skills = ref(JSON.parse(localStorage.getItem("skills")) || []);

function handleOpenSkill(index) {
  skills.value.splice(index, 1);
}
</script>

<template>
  <div class="container">
    <p class="text-3xl font-semibold">My Skills</p>
    <div class="flex">
      <div class="flex flex-wrap gap-2 my-4 w-1/2">
        <template v-for="(skill, index) in skills" :key="index">
          <Skill
            class="flex-1"
            :skill="skill"
            @click="handleOpenSkill(index)"
          ></Skill>
        </template>
      </div>
      <div>'aaa'</div>
    </div>
  </div>
</template>

<style scoped></style>
