<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  skill: Object,
});
</script>

<template>
  <div>
    <img :src="skill.src" :alt="skill.alt" />
    <p class="font-semibold text-nowrap select-none">{{ skill.name }}</p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: auto;
  padding: 0.2rem 0.8rem;
  box-shadow: 0px 0px 1px #ffffff9b;
  border-radius: 3px;
  background-color: #ffffff0d;
}

img {
  max-height: 20px;
  max-width: 20px;
  /* filter: brightness(1) saturate(0) invert(1); */
}
</style>
