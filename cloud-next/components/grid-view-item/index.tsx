
import { ReactElement, memo } from "react";
import type { FC } from "react";
import Image from "next/image";

import styles from './index.module.scss'
import type { IHotProduct } from "@/service/home";


interface IProps { 
    children?: ReactElement,
    product: any,
    showTip:boolean
 }

const GridViewItem:FC<IProps> = memo(function (props) { 

    const { product, showTip } = props
    const newProduct = product.products ? product.products : product
    

    return (
        <div className={ styles['grid-view-item'] }>
            <div className={styles['item-image']}>
                <Image
                    src={newProduct?.coverUrl!}
                    alt="product"
                    width={263} height={263}
                ></Image>
                {showTip && (
                    <div className={styles.tip}>
                        <div>￥{ newProduct?.minPrice }</div>
                        <div className={ styles['original-cost'] }>￥{ newProduct?.originalCost }</div>
                    </div>
                ) }
                
            </div>
            <div className={styles['item-info']}>
                { newProduct?.couponLabelDesc && <span className={styles.label}>{ newProduct?.couponLabelDesc }</span> }
                
                <span className={styles.name}>{ newProduct?.name }</span>
            </div>
            <div className={styles['item-price']}>￥{ newProduct?.minPrice }</div>
        </div>
    )
})
 
export default GridViewItem

GridViewItem.displayName = 'GridViewItem'