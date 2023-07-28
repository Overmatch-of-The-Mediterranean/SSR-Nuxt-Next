
import hyRequest from './index'

import type { IResultData } from './index'
import type { IProduct } from './home';

export interface IDetailPageInfo {
  id?: number;
  webPic?: string;
  products?: IProduct[];
}

export const getDetailInfo = async (id:any) => { 
    return hyRequest.get<IResultData<IDetailPageInfo>>('/special/getdetail?specialTopicId=' + id)
 } 