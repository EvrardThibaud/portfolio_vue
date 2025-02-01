<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  skill: Object,
});
</script>

<template>
  <div class="box">
    <img :src="skill.src" :alt="skill.alt" />
    <p class="font-semibold text-nowrap select-none">{{ skill.name }}</p>
  </div>
</template>

<style scoped>
div {
  gap: 1rem;
  padding: 0.2rem 0.8rem;
  background-color: #ffffff0d;
}

img{
  max-height: 20px;
  max-width: 20px;
  /* filter: brightness(1) saturate(0) invert(1); */
}

</style>
