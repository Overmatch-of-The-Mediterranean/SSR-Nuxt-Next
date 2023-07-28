<template>
    <div class="tab-category">
        <div class="category-item" @click="handleItemClick(item)" v-for="(item,index) in categorys" :key="item.id">
            <img class="pic-str" :src="item.picStr" alt="">
            <div class="title">{{ item.title }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ICategorys } from '@/store/home'

interface IProps {
    categorys: ICategorys[]
}

const props = withDefaults(defineProps<IProps>(), {
    categorys: (): ICategorys => []
})

const emit = defineEmits<{
    (emit: 'itemClick', item: ICategorys): void
}>()

const handleItemClick = item => {
    emit('itemClick', item)
}
</script>

<style lang='scss' scoped>
.tab-category {
    background-color: #fff;
    margin-top: 40px; /* color: red; */
    /* @include border(); */
    @include normalFlex();
    align-items: center;
    .category-item {
        height: 100%;
        cursor: pointer;
        .pic-str {
            width: 80px;
            height: 80px;
        }

        .title {
            margin-top: 16px;
            font-size: 16px;
            text-align: center;
            height: 24px;
            max-width: '120px';
        }
    }
}
</style>