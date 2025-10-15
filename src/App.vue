<script setup>
import Navbar from './components/AnimatedNavMenu.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>

<template>
    <Header></Header>
    <main>
        <RouterView></RouterView>
    </main>
    <Footer></Footer>
</template>

<style scoped>
.interactive-area {
    width: 100vw;
    height: auto;
}
</style>
