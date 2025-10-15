<script setup lang="ts">
import CustomCarousel from '@/components/Custom/CustomCarousel.vue'
import CustomCountUp from '@/components/Custom/CustomCountUp.vue'
import Presentation from '@/components/Presentation.vue'
import TargetCursor from '@/components/ui/TargetCursor.vue'
</script>

<template>
    <!-- <img src="/logo.png"></img>
        <div>
          <CustomCarousel></CustomCarousel>
          <CustomCarousel direction="backward"></CustomCarousel>
          <CustomCarousel></CustomCarousel>
        </div> -->
    <Presentation>
    </Presentation>
    <section>
        <TargetCursor :spin-duration="2" :hide-default-cursor="true" />
        
        <button class="cursor-target">Click me!</button>
        <div class="cursor-target">Hover target</div>
    </section>
    <!-- <div class="flex gap-11 flex-wrap w-full justify-center p-12">
        <CustomCountUp
            :title="'YouTube thumbnails created'"
            :to="1000"
            :suffix="'+'"
        ></CustomCountUp>
        <CustomCountUp :title="'Clients collaborated with'" :to="20" :suffix="'+'"></CustomCountUp>
        <CustomCountUp :title="'Years of experience'" :to="5"></CustomCountUp>
    </div> -->
</template>

<style scoped>
section {
    height: 100vh;
    width: 100%;
    background-color: green;
}
</style>
