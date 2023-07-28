import { ReactElement, memo, useState } from "react";
import type { FC } from "react";
import classNames from 'classnames'
import styles from './index.module.scss'
import type { ISearchSuggest } from "@/service/home";
import { useRouter } from "next/router";


interface IProps { 
    children?: ReactElement,
    searchSuggest: ISearchSuggest
 }



const Search: FC<IProps> = memo(function (props) { 
    const router = useRouter()
    const { searchSuggest } = props
    const [inputFocus, setInputFocus] = useState<boolean>(false)
    const [name,setName] = useState('蓝牙耳机')


    function handleOnFocus(isFocus: boolean) {
        setInputFocus(isFocus)
    }

    function handleOnBlur(isFocus: boolean) { 
        setInputFocus(isFocus)
    }

    function handleKeyDown(e: KeyboardEvent) { 
        const target = e.target as HTMLInputElement
        if (e.key === 'Enter') {
            handleToSearch(target.value)
            setInputFocus(false);
            
        }
        
    }
    
    function handleToSearch(name: string) { 
        
        // router.push(`/search?q=${name}`)
        router.push({
            pathname: '/search',
            query: {
                q: name
            }
        }
         )
     }

    return (
        <div className={styles.search}>
            <div className={styles['search-bg']}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="蓝牙耳机"
                    onFocus={()=>handleOnFocus(true)}
                    onBlur={() => handleOnBlur(false)}
                    onKeyDown={(event)=>handleKeyDown(event as any)}
                />
            </div>
            <div className={classNames(styles['search-panel'],inputFocus ? styles.show : styles.hide)}>
                <div className={styles.shadow}></div>
                <h2>热门搜索</h2>
                <ul>
                    {
                        searchSuggest && searchSuggest.configKey?.map((item, index) => { 
                            return <li key={item[index + 1]} onMouseDown={()=>handleToSearch(item[index+1])}>{ item[index+1] }</li>
                        })
                    }
                    
                </ul>
            </div>
            
        </div>
    )
})
 
export default Search

Search.displayName = 'Search'