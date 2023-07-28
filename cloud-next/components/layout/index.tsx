import { ReactElement, memo } from "react";
import type { FC } from "react";
import Navbar from "../navbar";
import Footer from "../footer";

interface IProps { 
    children?:ReactElement
 }

const Layout:FC<IProps> = memo(function (props) { 
    const { children } = props
    
    return (
        <div className="layout">
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    )
})
 
export default Layout

Layout.displayName = 'Layout'