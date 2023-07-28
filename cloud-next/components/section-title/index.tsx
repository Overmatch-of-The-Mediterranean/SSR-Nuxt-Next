import { ReactElement, memo } from "react";
import type { FC } from "react";

import styles from './index.module.scss'

interface IProps { 
    children?: ReactElement,
    title?: string
 }

const SectionTitle:FC<IProps> = memo(function (props) { 

    const { title } = props

    return (
        <div className={ styles['section-title'] }>
            { title }
        </div>
    )
})
 
export default SectionTitle

SectionTitle.displayName = 'SectionTitle'