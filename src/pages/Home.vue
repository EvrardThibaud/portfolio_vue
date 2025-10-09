<script setup lang="ts">
import CustomCarousel from '@/components/Custom/CustomCarousel.vue'
import CustomCountUp from '@/components/Custom/CustomCountUp.vue'
</script>

<template>
        <img src="/logo.png"></img>
        <div>
          <CustomCarousel></CustomCarousel>
          <CustomCarousel direction="backward"></CustomCarousel>
          <CustomCarousel></CustomCarousel>
        </div>
        <div class="flex gap-11 flex-wrap w-full justify-center p-12">
            <CustomCountUp
                :title="'YouTube thumbnails created'"
                :to="1000"
                :suffix="'+'"
            ></CustomCountUp>
            <CustomCountUp
                :title="'Clients collaborated with'"
                :to="20"
                :suffix="'+'"
            ></CustomCountUp>
            <CustomCountUp
                :title="'Years of experience'"
                :to="5"
            ></CustomCountUp>
        </div>
</template>

<style scoped>
img {
    max-width: 30vw;
}
</style>
