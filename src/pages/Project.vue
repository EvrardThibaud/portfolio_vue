<script setup>
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import Skill from "../components/Skill.vue";

const route = useRoute();

const viewMore = ref(false);
const screenshots = ref(null);
const showingScreenshot = ref(false);
const currentImage = ref(0);

function handleChangeCurrentImage(value) {
  currentImage.value = value;
  if (currentImage.value < 0) currentImage.value = project.value.src.length - 1;
  if (currentImage.value >= project.value.src.length) currentImage.value = 0;
}

function handleViewScreenshots() {
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
      <p class="text-xl font-semibold mt-6 mb-3">Project Screenshots</p>
      <div class="button" ref="screenshots" @click="handleViewScreenshots">
        <template v-for="(src, index) in project.src.slice(0, 3)" :key="index">
          <img
            :src="src"
            :alt="project.name + ' ' + index"
            class="size-10 rounded"
          />
        </template>
        <p v-if="project.src.length > 3">+ {{ project.src.length - 3 }}</p>
      </div>
    </template>

    <template v-else
      ><p class="opacity-75 text-center my-3">
        Unfortunately, there are no screenshots for this project.
      </p>
    </template>

    <template v-if="showingScreenshot">
      <div class="gallery">
        <button @click="handleViewScreenshots" class="button close">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="gallery_slider">
          <button
            v-if="project.src.length > 1"
            @click="handleChangeCurrentImage(currentImage - 1)"
            class="button"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <div>
            <img
              :src="project.src[currentImage]"
              :alt="project.name + ' ' + currentImage"
            />
          </div>
          <button
            v-if="project.src.length > 1"
            @click="handleChangeCurrentImage(currentImage + 1)"
            class="button"
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <div class="mt-4 box" ref="screenshots">
          <template v-for="(src, index) in project.src" :key="index">
            <img
              :src="src"
              :alt="project.name + ' ' + index"
              :class="
                'size-10 rounded ' +
                (index == currentImage ? 'border-2 border-white' : 'hover')
              "
              @click="handleChangeCurrentImage(index)"
            />
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  background-color: var(--fallback-b1, oklch(var(--b1) / 1));
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 10;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  .close {
    position: absolute;
    top: 2rem;
    left: 2rem;
    z-index: 10;
  }

  &:hover {
    cursor: default;
  }

  .gallery_slider {
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70vw;

      & > img {
        height: 70vh;
        scroll-snap-align: center;
        max-width: 100%;
      }
    }

    .button {
      height: 100%;
      margin: 1rem;
    }
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
