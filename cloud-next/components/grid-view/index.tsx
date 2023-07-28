import { ReactElement, memo } from "react";
import type { FC } from "react";
import { Row,Col } from 'antd'

import styles from './index.module.scss'

import GridViewItem from "../grid-view-item";
import type { IDetailPageInfo } from "@/service/detail";
import type { IAllProdcut, IHotProduct, IProduct } from "@/service/home";

interface IProps { 
    children?: ReactElement,
    products?: IHotProduct[] | IProduct[]
 }

const GridView:FC<IProps> = memo(function (props) { 

    const { products } = props

    return (
        <div className={ styles['grid-view'] }>
            <Row>
                {
                    products?.map((item,index) => { 
                        return (
                            <Col key={item.id} span={6}>
                                <GridViewItem showTip={ index===0 } product={ item }></GridViewItem>
                            </Col>
                        )
                     })
                }
                
     
            </Row>
        </div>
    )
})
 
export default GridView

GridView.displayName = 'GridView'