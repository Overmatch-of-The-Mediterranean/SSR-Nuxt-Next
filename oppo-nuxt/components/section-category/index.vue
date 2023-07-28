<template>
    <div class="section-categoty">
        <section-title :title="category.title"></section-title>
        <grid-view :category="category" :productDetailss="category.productDetailss"></grid-view>
    </div>
</template>

<script setup lang="ts">
import { ICategory } from '@/store/home'
interface IProps {
    category: ICategory
}

const props = withDefaults(defineProps<IProps>(), {
    category: () => ({})
})
</script>

<style lang='scss' scoped>
.section-categoty {
}
</style>