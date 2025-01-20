<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  image: Object,
});
</script>

<template>
  <div class="flex items-center button">
    <img :src="image.src" :alt="image.alt" />
    <p class="font-semibold">{{ image.alt }}</p>
  </div>
</template>

<style scoped>
img {
  max-height: 30px;
  max-width: 30px;
  /* filter: brightness(1) saturate(0) invert(1); */
}
</style>
