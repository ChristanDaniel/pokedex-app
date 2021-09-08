import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/dist/client/router'

const Header = dynamic(() => import('../../src/components/Header'), {
  ssr: false
})

const PokemonContainer = dynamic(() => import('../../src/features/Home/PokemonPage/PokemonContainer'), {
  ssr: false
})

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Pokedex | {router.query.id}</title>
      </Head>
      <PokemonContainer />
    </>
  )
}

export default Home
