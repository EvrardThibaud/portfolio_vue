<script setup>
import FuzzyText from "../components/ui/FuzzyText.vue";
</script>

<template>
  <div class="h-screen w-screen flex flex-col items-center justify-center gap-2">
    <FuzzyText
      text="error"
      :font-size="20"
      font-weight="900"
      color="#fff"
      :enable-hover="true"
      :base-intensity="0.0"
      :hover-intensity="0.5"
    />
    <FuzzyText
      text="404"
      :font-size="140"
      font-weight="900"
      color="#fff"
      :enable-hover="true"
      :base-intensity="0.18"
      :hover-intensity="0.5"
    />
  </div>
</template>

<style scoped></style>
