<template>
    <div class="intelligent">
        <div class="wrapper content">
            <section-main :banners="banners" :categorys="categorys"></section-main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHomeStore } from '@/store/home'

const homeStore = useHomeStore()
homeStore.fetchHomeInfo('intelligent')
const { banners, categorys } = storeToRefs(homeStore)
</script>

<style lang='scss' scoped>
.intelligent {
}
</style>