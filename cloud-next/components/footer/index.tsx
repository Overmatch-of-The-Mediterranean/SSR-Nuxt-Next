import { ReactElement, memo } from "react";
import type { FC } from "react";

interface IProps { 
    children?:ReactElement
 }

const Footer:FC<IProps> = memo(function (props) { 

    return (
        <div className="footer">
            <div>Footer</div>
        </div>
    )
})
 
export default Footer

Footer.displayName = 'Footer'