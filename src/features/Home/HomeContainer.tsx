import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { useRouter } from 'next/dist/client/router'

// import Image from 'next/image'
// import pokedex from '../../../public/pokedex.png'

import { MainContainer } from './styles'
import { api } from '../../services/api'

type PokemonType = {
  type: {
    name: string
  }
}

type PokeProps = {
  id: number
  name: string
  img: string
  types: PokemonType[]
}

interface HomeContainerProps {
  results: PokeProps[]
}

const HomeContainer = (): JSX.Element => {
  const [pokeList, setPokeList] = useState<PokeProps[]>([])
  const [relaod, setReload] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function getList() {
      const response = await api.get('/pokemon?limit=9')
      console.log('AHushauhsuahsuahsu', response.data)

      response.data.results.map(async (pokemon) => {
        const response = await api.get(`/pokemon/${pokemon.name}`)
        console.log('BORA V ER AQUI', response.data)
        setPokeList([
          ...pokeList,
          {
            id: response.data.id,
            name: response.data.name,
            img: response.data.sprites.other.dream_world.front_default,
            types: response.data.types
          }
        ])
        // })
        // const pokeType = []

        // response.data.types.map((type) => {
        //   pokeType.push({ name: type.type.name })
        //   // console.log('type.type.name', type.type.name)
        // })

        // const newPoke = {
        //   id: response.data.id,
        //   name: pokemon.name,
        //   img: response.data.sprites.front_default,
        //   types: pokeType
      })
      // pokeList.push(newPoke)
      // console.log('só pra confrimar', response.data)

      // console.log('DEPOIS DE SETAR', pokeList)
    }

    getList()
    console.log('ANTES DE SETAR', pokeList)
  }, [])

  // setTimeout(() => setReload(!relaod), 3000)

  return (
    <MainContainer>
      {pokeList.map((pokemon, index) => {
        // console.log(pokeList)
        return (
          <a key={index} onClick={() => router.push(`/pokemon/${pokemon.name}`)}>
            <div>
              <span>#{pokemon.id} </span>
              <span>{pokemon.name}</span>
              <div>
                {pokemon.types.map((natural, index) => {
                  return <div key={index}>{natural.type.name}</div>
                })}
              </div>
            </div>
            <img src={pokemon.img} />
          </a>
        )
      })}
    </MainContainer>
  )
}
export default HomeContainer
