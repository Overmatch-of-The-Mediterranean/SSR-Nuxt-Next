import hyRequest from './index'
import type { IResultData } from './index'
import type { IProductDetail } from '@/store/home'

export type IDetailInfoType = "oppo" | "air" | "watch" | "tablet"; 
export interface IDetailState { 
    id: number,
    title: string,
    productDetailss:IProductDetail[]
 }

export const getDetailInfo = (type:IDetailInfoType) => {
    return hyRequest.get<IResultData<IDetailState[]>>('/oppoDetail', {
        type
    })
 }