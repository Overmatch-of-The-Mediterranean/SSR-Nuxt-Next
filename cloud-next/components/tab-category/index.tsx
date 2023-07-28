
import { ReactElement, memo } from "react";
import classNames from "classnames";
import { Row, Col } from 'antd'
import Image from "next/image";

import styles from './index.module.scss'


import type { ICategory } from "@/service/home";
import type { FC } from "react";



interface IProps { 
    children?:ReactElement,
    categorys?:ICategory[]
 }

const TabCategory:FC<IProps> = memo(function (props) { 

    const { categorys } = props

    return (
        <div className={ styles['tab-category'] }>
            <div className={classNames('wrapper', styles.content)}>
                <Row>
                    {
                        categorys?.map((item, index) => { 
                            return (
                                <Col span={6} key={item.cid} >
                                    <div className={styles['category-item']}>
                                        <Image
                                            src={item.picStr!}
                                            alt="category"
                                            width={48}
                                            height={48}
                                            className={ styles.image }
                                        ></Image>

                                        <div className={styles.right}>
                                            <div className={styles.title}>{ item.title }</div>
                                            {item.type === 1 && (
                                                <div className={styles['sub-title']}>
                                                    <span className={ styles.count }>{ item.count }</span>
                                                    <span >{ item.desc }</span>
                                                </div>
                                            ) }
                                        </div>
                                    </div>
                                </Col>
                            )
                         })
                    }
                </Row>
            </div>
        </div>
    )
})
 
export default TabCategory

TabCategory.displayName = 'TabCategory'