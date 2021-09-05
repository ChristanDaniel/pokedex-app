import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../src/components/Header'), {
  ssr: false
})

const SeachPoke = dynamic(() => import('../src/components/SearchPoke'), {
  ssr: false
})

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pokedex-app</title>
      </Head>
      <Header />
      <SeachPoke />
      <h1>Hello World</h1>
    </>
  )
}

export default Home
