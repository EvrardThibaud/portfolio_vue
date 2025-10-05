<script setup>
import GradientBlinds from "../components/ui/GradientBlinds.vue";
import Counter from "../components/ui/Counter.vue";
import { ref, onMounted, onUnmounted } from "vue";

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
</script>

<template>
  <div style="position: relative; width: 100%; height: 100vh">
    <GradientBlinds
      :gradient-colors="['#FF5ACD', '#FBDA61']"
      :angle="119"
      :noise="0.6"
      :blind-count="64"
      :blind-min-width="10"
      :spotlight-radius="0.3"
      :spotlight-softness="1"
      :spotlight-opacity="1"
      :mouse-dampening="0.12"
      :distort-amount="3"
      shine-direction="right"
      mix-blend-mode="lighten"
      style="position: absolute; inset: 0; z-index: 0"
    />

    <div class="countdown-container">
      <template v-for="(unit, i) in timeUnits" :key="i">
        <div class="flex flex-col items-center mx-2">
          <p>{{ unit.label }}</p>
          <Counter
            :value="unit.value"
            :fontSize="100"
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
