import { ReactElement, memo } from "react";
import { useSelector,shallowEqual } from 'react-redux'
import type { FC } from "react";
import styles from './index.module.scss'
import classNames from "classnames";
import Link from "next/link";
import Search from "../search";
import type { IAppRootState } from "@/store/index";

interface IProps { 
    children?:ReactElement
 }

const Navbar: FC<IProps> = memo(function (props) { 
    
    const { navbar } = useSelector((state: IAppRootState) => ({
        navbar:state.home.navbar
     }),shallowEqual)

    return (
        <div className={ styles.navbar }>
            <div className={classNames('wrapper', styles.content)}>
                <div className={styles['content-left']}>
                    <Link href="/" className={styles.logo}></Link>
                    <h1 className={styles.title}>云音乐商城</h1>
                </div>
                <div className={styles['content-right']}>
                    <Search searchSuggest={ navbar }></Search>
                    <div className={classNames(styles['right-cart'])}>
                        <Link href="/" className={styles.cart}>
                            <span className={styles.count}>0</span>
                        </Link>
                    </div>
                    <div className={styles['right-login']}>登录</div>
                </div>
            </div>
        </div>
    )
})
 
export default Navbar

Navbar.displayName = 'Navbar'