<script setup>
import GradientBlinds from "../components/ui/GradientBlinds.vue";
</script>

<template>
  <div style="width: 100%; height: 100vh; position: relative">
    <GradientBlinds
      :gradient-colors="['#FF5ACD', '#FBDA61']"
      :angle="119"
      :noise="0.6"
      :blind-count="64"
      :blind-min-width="10"
      :spotlight-radius="0.4"
      :spotlight-softness="1"
      :spotlight-opacity="1"
      :mouse-dampening="0.12"
      :distort-amount="3"
      shine-direction="right"
      mix-blend-mode="lighten"
    />
  </div>
</template>
