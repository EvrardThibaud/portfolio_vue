<script setup lang="ts">
import CustomCarousel from "@/components/Custom/CustomCarousel.vue";
import CustomCountUp from "@/components/Custom/CustomCountUp.vue";
</script>

<template>
  <main>
    <CustomCarousel></CustomCarousel>
    <div class="flex flex-col gap-11">
      <CustomCountUp
        :title="'YouTube Thumbnails I’ve Designed'"
        :to="1000"
        :suffix="'+'"
      ></CustomCountUp>
      <CustomCountUp :title="'Client'" :to="20" :suffix="'+'"></CustomCountUp>
    </div>
  </main>
</template>

<style scoped></style>
