import React from 'react'
import type { AppProps } from 'next/app'

import '../styles/Global'
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
