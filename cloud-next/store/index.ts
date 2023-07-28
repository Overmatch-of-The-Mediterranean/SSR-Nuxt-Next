import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '@/store/modules/home'
import { createWrapper } from 'next-redux-wrapper'

const store = configureStore({
    reducer: {
        home:homeReducer
    }
})

const wrapper = createWrapper(() => store)
export default wrapper

export type IAppDispatch = typeof store.dispatch

export type IAppRootState = ReturnType<typeof store.getState>