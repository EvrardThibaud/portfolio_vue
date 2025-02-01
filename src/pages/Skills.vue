<script setup>
import Skill from "../components/Skill.vue";
import { ref, watch } from "vue";

const prompt = ref("");

const skills = ref(JSON.parse(localStorage.getItem("skills")) || []);

const skillsSearched = ref(skills.value);

function handleSearchSkills() {
  const searchTerm = prompt.value.trim().toLowerCase();

  skillsSearched.value = searchTerm
    ? skills.value.filter((skill) =>
        skill.name.toLowerCase().includes(searchTerm)
      )
    : skills.value;
}
</script>

<template>
  <div class="container">
    <p class="text-3xl font-semibold">My Skills</p>
    <input
      type="text"
      placeholder="Search for a skills"
      v-model="prompt"
      @input="handleSearchSkills"
    />
    <div class="flex flex-wrap gap-2 my-4">
        <template v-for="(skill, index) in skillsSearched" :key="skill.id">
          <Skill
            class="flex-1"
            :skill="skill"
            @click="handleOpenSkill(index)"
          ></Skill>
        </template>
    </div>
  </div>
</template>

<style scoped>
</style>
