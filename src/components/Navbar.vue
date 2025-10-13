<script setup lang="ts">
import { ref, computed, nextTick, watch, useTemplateRef } from 'vue'

const itemRefs = useTemplateRef('items')
const menuItems = ['Dev', 'Design']
const activeIndex = ref(0)
const indicatorWidth = ref(0)

const updateIndicator = () => {
  const el = itemRefs.value?.[activeIndex.value]
  if (el) {
    indicatorWidth.value = el.offsetWidth
  }
}

// Met à jour l'indicator à chaque changement d'index
watch(activeIndex, () => {
  nextTick(() => updateIndicator())
})

// Initialise la largeur au montage
nextTick(() => updateIndicator())

const indicatorStyle = computed(() => ({
  width: `${indicatorWidth.value}px`,
  transform: `translateX(${activeIndex.value * 100}%)`,
}))
</script>

<template>
    <div class="nav-container">
        <div class="indicator" :style="indicatorStyle"></div>

        <div ref="items" v-for="(item, i) in menuItems" :key="i" class="nav-item" @click="activeIndex = i">
            {{ item }}
        </div>
    </div>
</template>

<style scoped>
.nav-container {
    background: linear-gradient(145deg, #ffffff03, #81a9b82a);
    box-shadow: 0px 0px 1px #81a9b8;
    border-radius: 9999px;
    padding: 0.2rem 0.5rem;
    display: flex;
    gap: 0.5rem;
    position: relative;
}

.indicator {
    position: absolute;
    top: 0.5rem;
    left: 0;
    height: 1.9rem;
    background-color: #8b8b8b7a;
    border-radius: 9999px;
    z-index: 0;
    transition: transform 0.6s cubic-bezier(0.18, 0.89, 0.28, 1.17);
}

.nav-item {
    flex: 1;
    text-align: center;
    padding: 0.5rem;
    color: #81a9b8;
    z-index: 1;
    cursor: pointer;
    user-select: none;
}

.nav-item:active {
    transform: scale(0.9);
}
</style>
