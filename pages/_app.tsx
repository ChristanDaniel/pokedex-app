import React from 'react'
import '../styles/Global'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/Global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}
export default MyApp
