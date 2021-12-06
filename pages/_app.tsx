// pages / _app.tsx
// --> NEXT'S APP COMPONENT <-

import '../styles/index.css'

import type { AppProps } from "next/app";

function MyNextApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyNextApp
