<template>
    <div class="navbar">
        <div class="wrapper content">
            <NuxtLink to="/" class="content-left">
                <img class="logo" src="@/assets/images/logo.png" alt="">
                <h1 class="title">OPPO手机商城</h1>
            </NuxtLink>
            <div class="content-center">
                <ul class="content-center">
                    <li v-for=" (item,index) in navbars" :class="{'active':currentIndex === index}" :key="item.id">
                        <NuxtLink :to="getPagePath(item)" @click="handleItemClick(index)" class="link">{{ item.title }}</NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="content-right">
                <search></search>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { INavbars } from '@/service/home'
interface Iprops {
    navbars: INavbars[]
}

const props = withDefaults(defineProps<Iprops>(), {
    navbars: () => []
})

const currentIndex = ref(0)

const handleItemClick = (index: number) => {
    currentIndex.value = index
}

const getPagePath = computed(() => {
    return (item: INavbars) => {
        let path = '/'
        if (item.type !== 'oppo') {
            path += item.type
        }
        return path
    }
})
</script>

<style lang='scss' scoped>
.navbar {
    height: $navBarHeight;
    z-index: 99;
    border-bottom-color: rgba(0, 0, 0, 0.06);
    border-bottom-style: solid;
    border-bottom-width: 1px;

    /* 吸顶 */
    @include elementSticky(36px);
    background-color: white;

    .content {
        height: 100%;
        /* @include border(); */
        @include normalFlex();
        justify-content: flex-start;
        align-items: center;

        .content-left {
            display: inline-block;
            width: $logoWidth;
            height: $logoHeight;
            .logo {
                height: 100%;
            }
            .title {
                text-indent: -1000px;
                height: 0;
                margin: 0;
            }
        }

        .content-center {
            @include normalFlex();
            width: 530px;
            margin-left: 60px;

            .link {
                cursor: pointer;
                font-size: 14px;
                color: #000;
                opacity: 0.55;
            }
            .link:hover {
                opacity: 1;
            }
            .active .link {
                opacity: 1;
            }
        }

        .content-right {
            margin-left: 50px;
        }
    }
}
</style>