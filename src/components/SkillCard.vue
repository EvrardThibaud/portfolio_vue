<script setup>
import { defineProps, ref } from "vue";
const projects = ref(JSON.parse(localStorage.getItem("projects")) || []);

const props = defineProps({
  skill: Object,
});
</script>

<template>
    <p>{{ skill.name }}</p>
    <template v-for="(project, index) in projects" :key="index">
        <template v-if="project.skills.includes(skill.name) ">

            <p>{{project.name}}</p>
            <img :src="project.src[0]" alt="">
        </template>
    </template>
</template>

<style scoped></style>
