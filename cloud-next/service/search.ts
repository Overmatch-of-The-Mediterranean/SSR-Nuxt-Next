import hyRequest, { IResultData } from './index'


export interface ISearchProductResult {
  code: number;
  more: boolean;
  products?: any[];
}

export interface ISearchParam {
  limit: number;
  offset: number;
  key: string;
}

export const getSearchInfo = async (data:ISearchParam) => { 
    return hyRequest.post<ISearchProductResult>(
    `/store/api/product/search`,
    data,
    {
      "Content-Type": "application/x-www-form-urlencoded",
    }
    )
 }