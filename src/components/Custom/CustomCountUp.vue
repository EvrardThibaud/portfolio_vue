<script setup lang="ts">
import CountUp from '@/components/ui/CountUp.vue'

const props = defineProps({
    title: String,
    to: { type: Number, required: true },
    suffix: String,
})
</script>

<template>
    <div class="countup-container">
        <p>{{ title }}</p>
        <div class="countup">
            <CountUp :to="to" :delay="0" :duration="5" :start-when="true" />
            <p>{{ suffix }}</p>
        </div>
    </div>
</template>

<style scoped>
.countup-container {
    text-align: center;
    border-radius: 8px;
    box-shadow: 0px 0px 1px #81a9b8;
    background: linear-gradient(145deg, #121212, #0f0f0f);
    padding: 2rem 0rem;
    width: 300px;
    max-width: 95vw;

    .countup {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 3rem;
        color: #81a9b8;
    }
}
</style>
