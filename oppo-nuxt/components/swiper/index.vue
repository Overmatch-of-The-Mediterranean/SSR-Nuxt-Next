<template>
    <div class="swiper">
        <el-carousel ref="carouselRef" height="480px" indicator-position="none" @change="handleCarouselItem">
            <el-carousel-item v-for="item in banners" :key="item.id">
                <img class="pic-str" :src="item.picStr" alt="">
            </el-carousel-item>
        </el-carousel>

        <!-- 指示器 -->
        <ul class="dots">
            <li :class="['dot',currentIndex === index ? 'active':'']" v-for="(item,index) in banners" :key="item.id" @click="handleItemClick(index)"></li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElCarousel, ElCarouselItem } from 'element-plus'
import type { IBanner } from '@/store/home'

interface IProps {
    banners: IBanner[]
}

const props = withDefaults(defineProps<IProps>(), {
    banners: () => []
})

const currentIndex = ref(0)
const carouselRef: any = ref(null)

const handleItemClick = index => {
    currentIndex.value = index
    carouselRef.value.setActiveItem(index)
}

const handleCarouselItem = index => {
    currentIndex.value = index
}
</script>

<style lang='scss' scoped>
.swiper {
    padding-top: 36px;
    position: relative;
    .pic-str {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }

    .dots {
        height: 40px;
        width: 100%;
        position: absolute;
        bottom: 0px;
        left: 0;
        text-align: center;

        .dot {
            display: inline-block;
            width: 10px;
            height: 10px;
            box-sizing: border-box;
            border-radius: 10px;
            margin-right: 10px;
            background-color: #fff;
            opacity: 0.8;
            cursor: pointer;
        }
        .active {
            background-color: transparent;
            border: 2px solid #fff;
            width: 12px;
            height: 12px;
            position: relative;
            top: 1px;
        }
    }
}
</style>