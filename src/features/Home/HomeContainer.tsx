import React, { useContext, useEffect, useState } from 'react'
// import axios from 'axios'
import { useRouter } from 'next/dist/client/router'

// import Image from 'next/image'
// import pokedex from '../../../public/pokedex.png'

import { MainContainer, LiContent, DivContent, Content } from './styles'
import { api } from '../../services/api'
import { PokemonContainerContext } from './PokemonContainerContextProvider'
// import { useTheme } from 'styled-components'
// import defaultTheme from '../../../styles/theme'

type PokemonType = {
  type: {
    name: string
    // color?: string
  }
}

type PokeProps = {
  id: number
  name: string
  img: string
  types: PokemonType[]
  // backgroundColor?: string
}

interface HomeContainerProps {
  results: PokeProps[]
}

const HomeContainer = (): JSX.Element => {
  // const { colors } = useTheme()

  const { pokeList, setPokeList } = useContext(PokemonContainerContext)
  // const [pokeList, setPokeList] = useState<PokeProps[]>([])
  const [loadMore, setLoadMore] = useState('/pokemon?limit=9')
  const router = useRouter()

  const getAllPokemon = async () => {
    const response = await api.get(loadMore)
    setLoadMore(response.data.next)

    async function getListPokemon({ results }: HomeContainerProps) {
      results.forEach(async (pokemon) => {
        const response = await api.get(`/pokemon/${pokemon.name}`)

        return setPokeList((pokemon) => [
          ...pokemon,
          {
            id: response.data.id,
            name: response.data.name,
            img: response.data.sprites.other['official-artwork'].front_default,
            types: response.data.types
          }
        ])
        // console.log(pokeList)
        // setPokeList(pokeList.sort((a, b) => a.id - b.id))
      })
    }

    getListPokemon(response.data)
  }
  const listOrdenada = (pokeList: PokeProps[]) => {
    return pokeList.sort((a, b) => a.id - b.id)
  }

  useEffect(() => {
    getAllPokemon()
  }, [])

  return (
    <MainContainer>
      <Content>
        {listOrdenada(pokeList).map((pokemon, index) => {
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
      </Content>
      <div>
        <button onClick={() => getAllPokemon()}>Carregar mais</button>
      </div>
    </MainContainer>
  )
}
export default HomeContainer
