<script setup>
import { ref } from "vue";
const images = [
  { src: "/skills/vue_logo.png", alt: "Vue.js" },
  { src: "/skills/react_logo.png", alt: "React" },
  { src: "/skills/laravel_logo.png", alt: "Laravel" },
  { src: "/skills/docker_logo.png", alt: "Docker" },
  { src: "/skills/csharp_logo.png", alt: "C#" },
  { src: "/skills/vite_logo.png", alt: "Vite" },
  { src: "/skills/azuredevops_logo.png", alt: "Azure DevOps" },
  { src: "/skills/mongodb_logo.png", alt: "MongoDB" },
  { src: "/skills/nodejs_logo.png", alt: "Node.js" },
  { src: "/skills/dart_logo.png", alt: "Dart" },
  { src: "/skills/gitlab_logo.png", alt: "GitLab" },
  { src: "/skills/pgadmin4_logo.png", alt: "pgAdmin" },
  { src: "/skills/php_logo.png", alt: "PHP" },
  { src: "/skills/js_logo.png", alt: "JavaScript" },
  { src: "/skills/flutter_logo.png", alt: "Flutter" },
  { src: "/skills/css_logo.png", alt: "CSS" },
  { src: "/skills/socketio_logo.png", alt: "Socket.IO" },
  { src: "/skills/github_logo.png", alt: "GitHub" },
  { src: "/skills/linux_logo.png", alt: "Linux" },
  { src: "/skills/visualstudio_logo.png", alt: "Visual Studio" },
  { src: "/skills/poweramc_logo.png", alt: "PowerAMC" },
  { src: "/skills/powerbi_logo.png", alt: "Power BI" },
  { src: "/skills/python_logo.png", alt: "Python" },
  { src: "/skills/selenium_logo.png", alt: "Selenium" },
  { src: "/skills/sql_logo.png", alt: "SQL" },
  { src: "/skills/virtualbox_logo.png", alt: "VirtualBox" },
  { src: "/skills/visualparadigm_logo.png", alt: "Visual Paradigm" },
  { src: "/skills/vscode_logo.png", alt: "VS Code" },
  { src: "/skills/excel_logo.png", alt: "Excel" },
  { src: "/skills/html_logo.png", alt: "HTML" },
  { src: "/skills/dbeaver_logo.png", alt: "DBeaver" },
];
const skillsContainer = ref(null);
const viewMoreContent = ref("more");

function handleViewMoreSkills() {
  skillsContainer.value.classList.toggle("h-20");
  skillsContainer.value.classList.toggle("overflow-hidden");
  viewMoreContent.value = viewMoreContent.value === "more" ? "less" : "more";
}
</script>

<template>
  <div class="card">
    <p >My Skills</p>
    <p>
      Here are the tools, languages, and frameworks I am proficient in,
      showcasing my expertise in web development and software engineering.
    </p>

    <div
      ref="skillsContainer"
      class="flex justify-between flex-wrap gap-3 h-20 overflow-hidden"
    >
      <div
        class="flex items-center gap-3"
        v-for="(image, index) in images"
        :key="index"
      >
        <img :src="image.src" :alt="image.alt" />
        <p class="font-semibold">{{ image.alt }}</p>
      </div>
    </div>

    <p class="hover" @click="handleViewMoreSkills">
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

<style scoped>
img {
  max-height: 30px;
  max-width: 30px;
  filter: brightness(1) saturate(0) invert(1);
}
</style>
