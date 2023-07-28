import { defineStore } from "pinia";
import type { HomeInfoType } from '@/service/home'
import { getHomeInfo } from '@/service/home'



export interface INavbar {
  id?: string;
  title?: string;
  type?: string;
  link?: string;
  // ....
}
export interface IBanner {
  id?: string;
  picStr?: string;
  link?: string;
}
export interface IPriceInfo {
  buyPrice?: string;
  prefix?: string;
  currencyTag?: string;
}
export interface IActivityList {
  type?: string;
  activityInfo?: string;
}
export interface IProductDetail {
  id?: string;
  title?: string;
  url?: string;
  link?: string;
  priceInfo?: IPriceInfo;
  activityList?: IActivityList[];
}

export interface ICategory {
  id?: string;
  picStr?: string;
  title?: string;
  type?: string;
  url?: string;
  link?: string;
  productDetailss?: IProductDetail[];
}

export interface IHomeState {
  navbars?: INavbar[];
  banners?: IBanner[];
  categorys?: ICategory[];
}
 



export const useHomeStore = defineStore('home', {
    state: ():IHomeState => { 
        return {
            navbars: [],
            banners: [],
            categorys:[]
        }
     },
    actions: {
        async fetchHomeInfo(type: HomeInfoType) { 
            const { data } = await getHomeInfo(type)
            console.log(data);
            console.log(111);
            
            this.navbars = data.value?.data.navbars || []
            this.banners = data.value?.data.banners || []
            this.categorys = data.value?.data.categorys || []
            
         }
    }
}) 