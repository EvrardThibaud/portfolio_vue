<script setup lang="ts">
import { ref, computed } from 'vue'

const items = ['Dev', 'Design']
const activeIndex = ref(0)

const indicatorStyle = computed(() => ({
  transform: `translateX(${activeIndex.value * 100}%)`,
  transition: 'transform 0.3s ease',
}))
</script>

<template>
  <div class="bg-slate-600 rounded-full p-2 flex gap-2 relative overflow-hidden">
    <!-- Indicateur -->
    <div
      class="bg-slate-50 w-1/2 h-10 rounded-full absolute z-0"
      :style="indicatorStyle"
    ></div>

    <!-- Éléments -->
    <div
      v-for="(item, i) in items"
      :key="i"
      class="p-2 w-1/2 text-center text-black z-10 cursor-pointer"
      @click="activeIndex = i"
    >
      <p>{{ item }}</p>
    </div>
  </div>
</template>

<style scoped>
</style>