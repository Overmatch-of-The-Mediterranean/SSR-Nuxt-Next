import hyRequest from './index'

import type { IResultData } from './index'
import { IHomeState } from '@/store/home'

export type HomeInfoType = "oppo" | "onePlus" | "intelligent"; 

export const getHomeInfo = (type?:HomeInfoType) => { 
    return hyRequest.get<IResultData<IHomeState>>('/home/info', {
        type:type || 'oppo'
    })
 }