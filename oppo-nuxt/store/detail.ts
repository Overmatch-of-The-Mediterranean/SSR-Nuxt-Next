import { defineStore } from 'pinia'
import { IDetailState } from '@/service/detail'
import type { IDetailInfoType } from '@/service/detail'
import { getDetailInfo } from '@/service/detail'

interface IDetailTotal { 
    detail:IDetailState[]
}

export const useDetailStore = defineStore('detail',{
    state: ():IDetailTotal => { 
        return { 
            detail: []
        }
    },
    actions: {
        async fetchDetailInfo(type:IDetailInfoType) { 
            const { data } = await getDetailInfo(type)
            this.detail = data.value.data
         }
    }
})