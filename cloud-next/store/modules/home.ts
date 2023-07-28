import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ISearchSuggest, getSearchSuggest } from "@/service/home";


export const fetchSearchSuggest = createAsyncThunk('searchSuggest',async () => { 
    const res = await getSearchSuggest()
    
    return res.data
 })

interface IHomeInitialState { 
    counter:number,
    navbar: ISearchSuggest,
}
 



const homeSlice = createSlice({
    name: 'home',
    initialState: {
        counter: 0,
        navbar: {}
    } as IHomeInitialState,
    reducers: {
        increment(state, { payload }) { 
            state.counter += payload
        }
    },
    extraReducers: (builder) => { 
        // Hydrate的操作, 保证服务端端和客户端数据的一致性
        builder.addCase(HYDRATE, (state, action: any) => { 
            // state -> initialState
            // action.payload -> rootState
            return {
                ...state,
                ...action.payload.home
            }
        })
            .addCase(fetchSearchSuggest.fulfilled, (state, { payload }:any) => {
                state.navbar = payload
             })
     }
})


export const { increment } = homeSlice.actions
export default homeSlice.reducer