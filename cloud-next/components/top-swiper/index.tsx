import { ReactElement, memo, useState, useRef } from "react";
import type { ElementRef } from 'react'
import { Carousel } from 'antd'
import classNames from "classnames";
import Image from "next/image";

import styles from './index.module.scss'

import type { FC } from "react";
import type { IBanner } from "@/service/home";


interface IProps { 
    children?: ReactElement,
    banners:IBanner[]
 }

const TopSwiper:FC<IProps> = memo(function (props) { 
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const { banners } = props
    const carouselRef = useRef<ElementRef<typeof Carousel>>(null)
    

    function onSiwperChange(index: number) { 
        setCurrentIndex(index)
    }
    
    function handlePrevClick() {
        carouselRef.current?.prev()
     }

    function handleNextClick() { 
        carouselRef.current?.next()
     }

    return (
        <div className={ styles['top-swiper'] }>
            <div className={classNames('wrapper', styles.content)}>
                <Carousel
                    ref={ carouselRef }
                    className={styles.carousel}
                    autoplay
                    autoplaySpeed={3000}
                    fade
                    dots={ false }
                    afterChange={onSiwperChange}
                >
                    {
                        banners?.map((item, index) => { 
                            return (
                                <div className={styles['swiper-item']} key={item.id}>
                                    <div
                                        className={styles['swiper-bg']}
                                        style={{ backgroundImage:`url(${item.backendPicStr})` }}
                                    ></div>
                                    <Image
                                        src={item.picStr!}
                                        width={1100}
                                        height={480}
                                        alt="banner"
                                        className={ styles.image }
                                    ></Image>
                                </div>
                            )
                         })
                    }
                </Carousel>
                <ul className={styles.dots}>
                {
                    banners?.map((item, index) => { 
                        return <li key={item.id} className={ classNames(styles.dot,index === currentIndex ? styles.active:'') }></li>
                     })
                }
               
            </ul>
            </div>
            
            <button className={ styles.prev } onClick={handlePrevClick}>
                <span></span>
            </button>
            <button className={ styles.next } onClick={handleNextClick}>
                <span></span>
            </button>
            
        </div>
    )
})
 
export default TopSwiper

TopSwiper.displayName = 'TopSwiper'