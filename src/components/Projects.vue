<script setup>
import ProjectCard from './Project.vue';

const skills = [
  // { src: "/skills/excel_logo.png", alt: "Excel" },
  { src: "/skills/pgadmin4_logo.png", alt: "pgAdmin" },
  { src: "/skills/php_logo.png", alt: "PHP" },
  // { src: "/skills/html_logo.png", alt: "HTML" },
  // { src: "/skills/vscode_logo.png", alt: "VS Code" },
  // { src: "/skills/sql_logo.png", alt: "SQL" },
  // { src: "/skills/css_logo.png", alt: "CSS" },
  { src: "/skills/js_logo.png", alt: "JavaScript" },
  // { src: "/skills/github_logo.png", alt: "GitHub" },  
];
</script>

<template>
  <div class="card">
    <p class="text-2xl font-semibold leading-7">My Projects</p>

    <ProjectCard :src="'projects/cardsRoyale/screen1.png'" :skills="skills"></ProjectCard>
    
    <RouterLink :to="{ name: 'Projects' }" class="hover">
      All my projects <i class="fa-solid fa-arrow-right"></i>
    </RouterLink>
  </div>
</template>

<style scoped></style>
