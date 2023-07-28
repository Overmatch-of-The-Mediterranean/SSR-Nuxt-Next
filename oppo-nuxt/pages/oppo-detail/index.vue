<template>
    <div class="oppo-detail">
        <div class="wrapper content">
            <el-tabs v-model="activeName" class="oppo-tabs" @tab-click="handleClick">
                <div v-for="item in data?.data" :key="item.id">
                    <el-tab-pane :label="item.title" :name="item.title">
                        <grid-view :productDetailss="item.productDetailss"></grid-view>

                    </el-tab-pane>
                </div>
            </el-tabs>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ElTabs, ElTabPane } from 'element-plus'
import { storeToRefs } from 'pinia'
import { useDetailStore } from '@/store/detail'
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { getDetailInfo } from '@/service/detail'

const activeName = ref('必买榜单')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    // console.log(tab, event)
}

const route = useRoute()
const { type } = route.query

const { data } = await getDetailInfo(type)
activeName.value = data.value.data[0].title

// 使用 pinia共享状态，请求时，会有上次数据的屏闪，因为请求还没过来，所以使用的还是上次的数据
// const detailStore = useDetailStore()
// const { detail } = storeToRefs(detailStore)
// watch(detail, () => {
//     activeName.value = detail.value[0].title
// })
</script>

<style lang='scss' scoped>
.oppo-detail {
    background-color: $bgGrayColor;
    padding-bottom: 60px;
    padding-top: 8px;

    .content {
        .oppo-tabs {
            /* 背景 */
            :deep(.el-tabs__header) {
                background-color: white;
            }

            :deep(.el-tabs__nav-wrap) {
                height: 48px;
                padding: 0 52px;
                /* 底部线 */
                &::after {
                    background-color: white;
                }
                /* 按钮 */
                .el-tabs__nav-prev,
                .el-tabs__nav-next {
                    width: 48px;
                    .el-icon,
                    svg {
                        width: 25px;
                        height: 25px;
                    }
                    svg {
                        position: relative;
                        top: 10px;
                    }
                }

                /* 移动线条激化样式 */
                .el-tabs__nav-next + .el-tabs__nav-scroll .el-tabs__active-bar {
                    /* left: 0px; */
                }
                .el-tabs__active-bar {
                    background-color: $priceColor;
                    /* left: 48px; */
                }
            }

            :deep(.el-tabs__item) {
                height: 48px;
                opacity: 0.6;
                font-weight: 400;
                padding-top: 5px;

                position: relative;
                /* hover字体演示 */
                &:hover,
                &.is-active {
                    color: $priceColor;
                }
            }
        }
    }
}
</style>