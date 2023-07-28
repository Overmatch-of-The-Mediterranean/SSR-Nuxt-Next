<template>

    <div class="layout">

        <!-- header头部 -->
        <app-header></app-header>
        <navbar :navbars="navbars"></navbar>
        <slot></slot>

        <!-- footer尾部 -->
        <app-footer></app-footer>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHomeStore } from '@/store/home'

const homeStore = useHomeStore()
homeStore.fetchHomeInfo('oppo')

const { navbars } = storeToRefs(homeStore)
</script>

<style lang='scss' scoped>
.layout {
}
</style>
