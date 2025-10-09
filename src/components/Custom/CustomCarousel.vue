<script setup lang="ts">
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

let images: string[] = [];

for (let i = 1; i <= 11; i++) {
  images.push(`/youtube_thumbnails/thumbnail${i}.png`);
}
</script>

<template>
  <Carousel
    class="carousel cursor-grab"
    :opts="{
      align: 'start',
      loop: true,
    }"
    :plugins="[
      AutoScroll({
        startDelay: 0,
        stopOnInteraction: false,
        speed: 2,
        direction: 'backward',
      }),
    ]"
  >
    <CarouselContent class="">
      <CarouselItem
        class="md:basis-1/4 lg:basis-1/4"
        v-for="(image, index) in images"
        :key="index"
      >
        <img class="carousel-image" :src="image" alt="" />
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>

<style scoped>
.carousel-image {
  max-height: 25vh;
  width: auto;
  object-fit: contain;
  margin: 0 auto;
  border-radius: 4px;
}
</style>
