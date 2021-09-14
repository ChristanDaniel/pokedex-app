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

// interface HomeContainerProps {
//   results: PokeProps[]
// }

const HomeContainer = (): JSX.Element => {
  const [pokeList, setPokeList] = useState<PokeProps[]>([])
  const [loadMore, setLoadMore] = useState('/pokemon?limit=9')
  const router = useRouter()

  async function getListPokemon() {
    const response = await api.get(loadMore)
    setLoadMore(response.data.next)

    response.data.results.forEach(async (pokemon: PokeProps) => {
      const response = await api.get(`/pokemon/${pokemon.name}`)

      return setPokeList((list) => [
        ...list,
        {
          id: response.data.id,
          name: response.data.name,
          img: response.data.sprites.other['official-artwork'].front_default,
          types: response.data.types
        }
      ])
    })
  }

  useEffect(() => {
    getListPokemon()
  }, [])

  return (
    <MainContainer>
      <ul>
        {pokeList.map((pokemon, index) => {
          return (
            <>
              <li key={index}>
                <a onClick={() => router.push(`/pokemon/${pokemon.name}`)}>
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
              </li>
            </>
          )
        })}
      </ul>
      <button onClick={() => getListPokemon()}>Load More</button>
    </MainContainer>
  )
}
export default HomeContainer
