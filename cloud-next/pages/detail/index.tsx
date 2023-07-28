import { ReactElement, memo } from "react";
import classNames from "classnames";
import Image from "next/image";
import type { FC } from "react";

import wrapper from "@/store/index";
import GridView from "@/components/grid-view";
import { getDetailInfo } from "@/service/detail"

import styles from './index.module.scss'
import type { GetServerSideProps } from "next";
import type { IDetailPageInfo } from "@/service/detail";





interface IProps { 
    children?: ReactElement,
    detailData:IDetailPageInfo
 }

const Detail:FC<IProps> = memo(function (props) { 

    const { detailData } = props
    console.log(detailData);
    

    return (
        <div className={ styles.detail }>
            <div className={classNames('wrapper', styles.content)}>
                <Image src={detailData.webPic!} className={styles.banner} alt='product' width={1100} height={480}></Image>
                <GridView products={detailData.products}></GridView>
            </div>
        </div>
    )
})
 
export default Detail

Detail.displayName = 'Detail'

export const getServerSideProps:GetServerSideProps = wrapper.getServerSideProps(function (store) {
    return async (context) => {
        const { id } = context.query

        const res = await getDetailInfo(id)

        return {
            props: {
                detailData:res.data
            }
        }
    }
 })