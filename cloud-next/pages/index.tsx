import Head from "next/head";
import type { FC } from 'react'

import wrapper from "../store";
import styles from './index.module.scss'
import { fetchSearchSuggest } from "@/store/modules/home";
import { getAllProduct, getHomeInfo, getHotProduct } from "@/service/home";

import TopSwiper from "@/components/top-swiper";
import TabCategory from "@/components/tab-category";
import Recommend from "@/components/recommend";

import type { IAllProdcut, IBanner, ICategory, IHotProduct, IProduct, IRecommend } from "@/service/home";
import type { GetServerSideProps } from "next";
import classNames from "classnames";
import SectionTitle from "@/components/section-title";
import GridView from "@/components/grid-view";



interface IProps { 
    banners: IBanner[],
    categorys: ICategory[],
    recommends: IRecommend[],
    digitalData: any[],
    hotProducts: IHotProduct[],
    allProducts:IProduct[]
 }

const Home:FC<IProps> = (props)=> {
    
    const { banners=[], categorys=[], recommends=[],hotProducts=[],allProducts=[] } = props
    

  return (
    <div>
          <Head>
              <title>云音乐商城</title>
          </Head>
          <div className={styles.home}>
              <TopSwiper banners={banners}></TopSwiper>
              <TabCategory categorys={categorys}></TabCategory>
              <Recommend recommends={recommends}></Recommend>
              
              <div className={classNames('wrapper', styles.content)}>
                  <SectionTitle title={'编辑推荐'}></SectionTitle>
                  <GridView products={ hotProducts } ></GridView>
                  
                  <SectionTitle title={'热门推荐'}></SectionTitle>
                  <GridView products={ allProducts }></GridView>
              </div>
          </div>
    </div>
  )
}

export default Home
Home.displayName = "Home";

export const getServerSideProps:GetServerSideProps = wrapper.getServerSideProps(function (store) {
    return async (context) => {
        
        await store.dispatch(fetchSearchSuggest())

        const res = await getHomeInfo()
        
        const resHot = await getHotProduct()
        
        const resAll = await getAllProduct()
        return {
            props: {
                banners: res.data.banners || [],
                categorys: res.data.categorys || [],
                recommends: res.data.recommends || [],
                digitalData: res.data.digitalData || [],
                hotProducts: resHot.data.hotProduct || [],
                allProducts: resAll.data.allProduct || []
            }
        }
    }
 })
