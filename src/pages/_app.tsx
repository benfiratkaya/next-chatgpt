import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar";
import {Provider} from "react-redux";
import {store} from "@/redux/store";

import '@/assets/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <NextNProgress color="#b8b8b8" />
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
}
