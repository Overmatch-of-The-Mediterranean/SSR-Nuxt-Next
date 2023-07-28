import hyRequest from '@/service/index'

export interface ISearchSuggest {
  id: string;
  defaultKey: string;
  configKey: any[];
}

export interface IBanner {
  id: number;
  picStr?: string;
  backendPicStr?: string;
}
export interface ICategory {
  cid: number;
  picStr?: string;
  title?: string;
  tabIndex?: number;
  targetUrl?: string;
  count?: number;
  desc?: string;
  type?: number;
}
export interface IRecommend {
  id: number;
  picStr?: string;
  title?: string;
}
export interface IHomeInfo {
  banners?: IBanner[];
  categorys?: ICategory[];
  recommends?: IRecommend[];
  digitalData?: any;
}
export interface IProduct {
  id: number;
  type?: number;
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  originalCost?: number;
  couponLabelDesc?: string;
  coverUrl?: string;
}
export interface IHotProduct {
  id: number;
  products?: IProduct;
}
export interface IHotproductV2 {
  count?: number;
  hasMore?: boolean;
  hotProduct?: IHotProduct[];
}
export interface IAllProdcut {
  count?: number;
  allProduct?: IProduct[];
}


interface IResultData<T> { 
    code: number,
    data:T
 }

export const getSearchSuggest = async () => { 
    return hyRequest.get<IResultData<ISearchSuggest>>('/searchSuggest/get')
}
 

export const getHomeInfo = async () => { 
    return hyRequest.get<IResultData<IHomeInfo>>('/home/info')
}

export const getHotProduct = async () => { 
    return hyRequest.get<IResultData<IHotproductV2>>('/hotproduct_v2/gets')
}
 

export const getAllProduct = async () => { 
    return hyRequest.get<IResultData<IAllProdcut>>('/allProduct/gets')
 }