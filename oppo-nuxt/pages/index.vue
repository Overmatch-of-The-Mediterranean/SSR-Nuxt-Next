<template>
    <div class="home">
        <div class=" wrapper content">
            <section-main :banners="banners" :categorys="categorys"></section-main>

        </div>

    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHomeStore, ICategorys } from '@/store/home'

const homeStore = useHomeStore()
homeStore.fetchHomeInfo('oppo')
const { banners, categorys } = storeToRefs(homeStore)
</script>

<style lang='scss' scoped>
.home {
}
</style>