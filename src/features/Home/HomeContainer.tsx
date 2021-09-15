import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { useRouter } from 'next/dist/client/router'

// import Image from 'next/image'
// import pokedex from '../../../public/pokedex.png'

import { MainContainer, LiContent, DivContent } from './styles'
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
  const [loadMore, setLoadMore] = useState('/pokemon?limit=9')
  const router = useRouter()

  const getAllPokemon = async () => {
    const response = await api.get(loadMore)
    setLoadMore(response.data.next)

    async function getListPokemon({ results }: HomeContainerProps) {
      results.forEach(async (pokemon) => {
        const response = await api.get(`/pokemon/${pokemon.name}`)
        console.log(response)

        return (
          setPokeList((pokemon) => [
            ...pokemon,
            {
              id: response.data.id,
              name: response.data.name,
              img: response.data.sprites.other['official-artwork'].front_default,
              types: response.data.types
            }
          ]),
          pokeList.sort((a, b) => a.id - b.id)
        )
      })
    }

    getListPokemon(response.data)
  }

  useEffect(() => {
    getAllPokemon()
  }, [])

  return (
    <MainContainer>
      {pokeList.map((pokemon, index) => {
        return (
          <>
            <LiContent key={index}>
              <a onClick={() => router.push(`/pokemon/${pokemon.name}`)}>
                <img src={pokemon.img} />
                <DivContent>
                  <span>#{pokemon.id} </span>
                  <h2>{pokemon.name}</h2>
                  <div>
                    {pokemon.types.map((natural, index) => {
                      return <p key={index}>{natural.type.name}</p>
                    })}
                  </div>
                </DivContent>
              </a>
            </LiContent>
          </>
        )
      })}
      <button onClick={() => getAllPokemon()}>Load More</button>
    </MainContainer>
  )
}
export default HomeContainer
