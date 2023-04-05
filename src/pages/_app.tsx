import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar";
import {Provider} from "react-redux";
import {store} from "@/redux/store";

import '@/assets/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
        <NextNProgress color="#b8b8b8" />
        <Component {...pageProps} />
      </Provider>
  )
}
