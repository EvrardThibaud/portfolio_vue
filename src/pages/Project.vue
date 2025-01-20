<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const skills = JSON.parse(route.params.skills || "[]");
</script>

<template>
  <p>{{ route.params.name }}</p>
  <p>{{ skills }}</p>
</template>

<style scoped></style>
