
import { ReactElement, memo } from "react";
import type { GetServerSideProps } from "next";
import type { FC } from "react";

import wrapper from "@/store/index";
import { getSearchInfo } from "@/service/search";
import GridView from "@/components/grid-view";
import type { IProduct } from "@/service/home";

interface IProps { 
    children?: ReactElement,
    products?: IProduct[]
 }

const Search:FC<IProps> = memo(function (props) { 
    const { products } = props

    return (
        <div className="search">
            <GridView products={products}></GridView>
        </div>
    )
})
 
export default Search

Search.displayName = 'Search'

export const getServerSideProps:GetServerSideProps = wrapper.getServerSideProps(function (store) {
    return async (context) => {
        const { q } = context.query

        const res = await getSearchInfo({
            limit: 60,
            offset: 0,
            key: q as string
        })

        return {
            props: {
                products:res.products
            }
        }
    }
 })