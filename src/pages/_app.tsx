import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar";
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <NextNProgress color="#b8b8b8" />
    <Component {...pageProps} />
  </>
}
