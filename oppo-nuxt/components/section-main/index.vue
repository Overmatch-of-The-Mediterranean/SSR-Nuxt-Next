<template>
    <div class="section-main">
        <!-- 轮播图 -->
        <swiper :banners="banners"></swiper>

        <!-- 分类tabs -->
        <tab-category @item-click="handleItemClick" :categorys="categorys"></tab-category>

        <div v-for="item in categorys" :key="item.id">
            <section-category v-if="item.url && item.productDetailss.length" :category="item"></section-category>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ICategory, IBanner } from '@/store/home'
import { useDetailStore } from '@/store/detail'

interface IProps {
    banners: IBanner[]
    categorys: ICategory[]
}

const props = withDefaults(defineProps<IProps>(), {
    banners: () => [],
    categorys: () => []
})

const detailStore = useDetailStore()

// const route = useRoute()
// console.log(route.value)

const handleItemClick = (item: ICategory) => {
    console.log(item.type)

    detailStore.fetchDetailInfo(item.type)

    navigateTo('oppo-detail?type=' + item.type)

    // console.log(route.value)
}
</script>

<style lang='scss' scoped>
.section-main {
}
</style>