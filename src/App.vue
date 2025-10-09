<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import ClickSpark from "./components/ui/ClickSpark.vue";
</script>

<template>
  <ClickSpark
    spark-color="#81a9b8"
    :spark-size="12"
    :spark-radius="25"
    :spark-count="9"
    :duration="600"
    easing="ease-out"
    :extra-scale="1.2"
    class="interactive-area"
  >
    <!-- <Navbar></Navbar> -->
    <main>
      <RouterView></RouterView>
    </main>
    <Footer></Footer>
  </ClickSpark>
</template>

<style scoped>
.interactive-area {
  width: 100vw;
  height: auto;
}
</style>
