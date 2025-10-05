<script setup>
import GradientBlinds from "../components/ui/GradientBlinds.vue";
import LightRays from "../components/ui/LightRays.vue";
import Counter from "../components/ui/Counter.vue";

import { ref, onMounted, onUnmounted, computed } from "vue";

const targetDate = new Date("2025-10-12T00:00:00");
const timeUnits = ref([
  { label: "Days", value: 0 },
  { label: "Hours", value: 0 },
  { label: "Minutes", value: 0 },
  { label: "Seconds", value: 0 },
]);

let interval;

const updateCountdown = () => {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) {
    timeUnits.value.forEach((unit) => (unit.value = 0));
    clearInterval(interval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timeUnits.value[0].value = days;
  timeUnits.value[1].value = hours;
  timeUnits.value[2].value = minutes;
  timeUnits.value[3].value = seconds;
};

onMounted(() => {
  updateCountdown();
  interval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => clearInterval(interval));

const windowWidth = ref(window.innerWidth);

window.addEventListener('resize', () => {
  windowWidth.value = window.innerWidth;
});

const fontSize = computed(() => {
  if (windowWidth.value < 640) return 50;  // mobile
  if (windowWidth.value < 1024) return 80; // tablet
  return 100;                             // desktop
});
</script>

<template>
  <div style="position: relative; width: 100vw; height: 100vh">
    <LightRays
      style="position: absolute; inset: 0; z-index: 0"
      rays-origin="top-center"
      :rays-speed="1.5"
      :light-spread="0.8"
      :ray-length="1.2"
      :follow-mouse="true"
      :mouse-influence="0.1"
      :noise-amount="1"
      class-name="custom-rays"
    />

    <div class="countdown-container">
      <template v-for="(unit, i) in timeUnits" :key="i">
        <div class="flex flex-col items-center mx-2">
          <p>{{ unit.label }}</p>
          <Counter
            :value="unit.value"
            :fontSize="fontSize"
            fontWeight="800"
            :padding="5"
            :gap="0"
            textColor="white"
            :fontWeight="900"
            gradientFrom="none"
            gradientTo="none"
            :containerStyle="{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }"
            :counterStyle="{
              backgroundColor: 'rgba(0,0,0,0.3)',
              borderRadius: '12px',
            }"
            :digitStyle="{
              color: 'white',
              textShadow: '0 0 10px rgba(255,255,255,0.5)',
            }"
          />
        </div>
      </template>
    </div>
  </div>
  
</template>

<style scoped>
.countdown-container {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  pointer-events: none;
  border-radius: 12px;
}
</style>
