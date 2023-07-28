<template>
    <div class="onePlus">
        <div class="wrapper content">
            <section-main :banners="banners" :categorys="categorys"></section-main>
        </div>

    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHomeStore, ICategorys } from '@/store/home'

const homeStore = useHomeStore()
homeStore.fetchHomeInfo('onePlus')
const { banners, categorys } = storeToRefs(homeStore)
</script>

<style lang='scss' scoped>
.onePlus {
}
</style>