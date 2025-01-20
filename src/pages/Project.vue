<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const projectData = route.params.projectData;
</script>

<template>
  <p>{{ projectData }}</p>
</template>

<style scoped></style>
