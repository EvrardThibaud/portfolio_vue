<script setup>
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import Skill from "../components/Skill.vue";

const route = useRoute();

const viewMore = ref(false);
const screenshots = ref(null);
const showingScreenshot = ref(false);

function handleViewScreenshots() {
  screenshots.value.classList.toggle("smooth-transition");
  showingScreenshot.value = !showingScreenshot.value;
}

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
    <p class="text-3xl font-semibold">{{ project.name }}</p>
    <div v-if="project.dsc">
      <p
        :class="[
          'text-justify text-ellipsis overflow-hidden mt-5',
          viewMore ? '' : 'project_description ',
        ]"
      >
        {{ project.dsc }}
      </p>
      <p class="hover w-fit mt-1 select-none" @click="viewMore = !viewMore">
        View {{ viewMore ? "Less" : "More" }}
      </p>
    </div>

    <div v-if="project.skills" class="flex flex-wrap gap-2 py-2 px-1 my-3">
      <template v-for="(skill, index) in filteredSkills" :key="index">
        <Skill :skill="skill"></Skill>
      </template>
    </div>

    <div v-if="project.github" class="flex gap-2 flex-wrap">
      <template v-for="(link, index) in project.github" :key="index">
        <div class="button">
          <a :href="link" target="_blank" class="flex items-center gap-2">
            <p>View on github</p>
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </template>
    </div>
    <p v-if="project.github.length > 1" class="opacity-75 mb-3">
      This project has {{ project.github.length }} versions.
    </p>
    <p
      v-else-if="project.github.length == 0"
      class="opacity-75 text-center mb-3"
    >
      Unfortunately, the source code of this project is not available.
    </p>

    <template v-if="project.src.length > 0">
      <p class="text-xl font-semibold my-3">Project Screenshots</p>
      <div class="button" ref="screenshots" @click="handleViewScreenshots">
        <template
          v-for="(src, index) in showingScreenshot
            ? project.src
            : project.src.slice(0, 3)"
          :key="index"
        >
          <img
            :src="src"
            :alt="project.name + ' ' + index"
            class="size-10 rounded"
          />
        </template>
        <p v-if="project.src.length > 3 && !showingScreenshot">
          + {{ project.src.length - 3 }}
        </p>
      </div>
    </template>

    <template v-else
      ><p class="opacity-75 text-center my-3">
        Unfortunately, there are no screenshots for this project.
      </p></template
    >
  </div>
</template>

<style scoped>
.smooth-transition {
  position: absolute;
  left: 50%; 
  top: 50%;
  z-index: 10;
  width: 70%;
  overflow-x: auto;
  transform: translate(-50%, -50%);
  scroll-snap-type: x mandatory;  
  scroll-behavior: smooth; 

  &:hover{
    cursor: default;
  }

  & > img {
    height: 70vh;
    scroll-snap-align: center;
    width: auto;
  }
}

.project_description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

img {
  box-shadow: 0px 0px 1px rgba(255, 255, 255, 0.606);
}
</style>
