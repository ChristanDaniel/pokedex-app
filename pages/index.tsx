import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
// import HomeContainer from '../src/features/Home/HomeContainer'

const Header = dynamic(() => import('../src/components/Header'), {
  ssr: false
})

const SeachPoke = dynamic(() => import('../src/components/SearchPoke'), {
  ssr: false
})

const HomeContainer = dynamic(() => import('../src/features/Home/HomeContainer'), {
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
      <HomeContainer />
    </>
  )
}

export default Home
