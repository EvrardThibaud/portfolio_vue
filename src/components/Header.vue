<script lang="ts" setup>
import AnimatedNavMenu from '@/components/AnimatedNavMenu.vue'
</script>
<template>
    <header class="sticky top-0 w-screen h-16">
        <div class="flex justify-between p-2 m-2">
            <RouterLink to="/">
                <img src="/fav_icon.png" class="h-12" />
            </RouterLink>
            <AnimatedNavMenu />
            <div></div>
        </div>
    </header>
</template>
<style scoped>

</style>