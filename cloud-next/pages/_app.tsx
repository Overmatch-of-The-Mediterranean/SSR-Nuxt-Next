import 'normalize.css'
import "antd/dist/reset.css";
import '@/styles/globals.scss'
import { Provider } from 'react-redux'

import Layout from '@/components/layout'
import wrapper from '@/store/index'

import type { AppProps } from 'next/app'

export default function App({ Component, ...rest }: AppProps) {
    const { store,props } = wrapper.useWrappedStore(rest)
    return (
      <Provider store={store}>
            <Layout>
                <Component {...props.pageProps} />
        </Layout>
      </Provider>
    )
}
