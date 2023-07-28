<template>
    <div class="grid-view">
        <div class="view-item first" v-if="category.url">
            <img :src="category.url" alt="">
        </div>
        <div class="view-item" v-for="(item,index) in productDetailss" :key="item.id">
            <grid-view-item :productDetail="item"></grid-view-item>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IProductDetailss, ICategory } from '@/store/home'

interface IProps {
    productDetailss: IProductDetailss
    category?: ICategory
}

const props = withDefaults(defineProps<IProps>(), {
    productDetailss: () => ({}),
    category: () => ({})
})
</script>

<style lang='scss' scoped>
.grid-view {
    width: $contentWidth + 18px;
    /* @include border(green); */
    @include normalFlex();
    flex-wrap: wrap;
    justify-content: flex-start;

    .view-item {
        width: 20%;
        padding-right: 18px;
        margin-bottom: 18px;
        /* @include border(red); */
        /* height: $gridItemHeight; */
        box-sizing: border-box;
        background-color: $bgGrayColor;
        cursor: pointer;
    }

    .first {
        width: 40%;
        & > img {
            width: 100%;
            height: 100%;
            /* 动画效果 */
            transition: all 0.2s linear;
            &:hover {
                @include hoverEffect();
            }
        }
    }
}
</style>