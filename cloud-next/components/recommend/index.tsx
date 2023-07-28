import { ReactElement, memo } from "react";
import type { FC } from "react";
import { Row,Col } from 'antd'
import  Link  from 'next/link'

import styles from './index.module.scss'
import classNames from "classnames";

import type { IRecommend } from "@/service/home";
import Image from "next/image";

interface IProps { 
    children?: ReactElement,
    recommends?:IRecommend[]
 }

const Recommend:FC<IProps> = memo(function (props) { 
    const { recommends } = props

    return (
        <div className={ styles.recommend }>
            <div className={classNames('wrapper', styles.content)}>
                <Row>
                    {
                        recommends?.map((item, index) => { 
                            return (
                                <Col span={12} key={item.id}>
                                        <Link href={`/detail?id=${item.id}`} className={styles['recommend-item']}>
                                            <Image
                                                className={styles.image}
                                                src={item.picStr!}
                                                alt="recommend"
                                                width={ 542 }
                                                height={ 300 }
                                            >
                                            </Image>
                                        </Link>
                                </Col>
                            )
                         })
                    }
                </Row>
            </div>
        </div>
    )
})
 
export default Recommend

Recommend.displayName = 'Recommend'