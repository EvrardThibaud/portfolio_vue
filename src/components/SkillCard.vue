<script setup>
import { defineProps, ref } from "vue";
const projects = ref(JSON.parse(localStorage.getItem("projects")) || []);

const props = defineProps({
  skill: Object,
});
</script>

<template>
  <div class="skill_card card">
    <img :src="skill.src" alt="" />
    <div class="text-right">
      <p class="font-semibold">{{ skill.name }}</p>
      <template v-for="(project, index) in projects" :key="index">
        <template v-if="project.skills.includes(skill.name)">
          <RouterLink
            :to="{
              name: 'project',
              params: {
                id: project.id,
              },
            }"
          >
            <div class="hover font-extralight">
              <p>{{ project.name }}</p>
            </div>
          </RouterLink>
        </template>
      </template>
    </div>
  </div>
</template>

<style scoped>
.skill_card {
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: row;
  overflow: hidden;

  & img {
    position: absolute;
    left: -50px;
    max-height: 200px;
    max-width: 200px;
    width: auto;
  }
}
</style>
