import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/dist/client/router'

import Image from 'next/image'
import pokedex from '../../../public/pokedex.png'

import { MainContainer } from './styles'
import { api } from '../../services/api'

type PokeProps = {
  name: string
  img: {
    url: string
  }
  types: []
}

interface HomeContainerProps {
  results: PokeProps
}

const HomeContainer = () => {
  const [pokeList, setPokeList] = useState<PokeProps>([])
  const [relaod, setReload] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function getList() {
      const response = await api.get('/pokemon?limit=9')
      response.data.results.map(async (pokemon) => {
        const response = await api.get(`/pokemon/${pokemon.name}`)
        const pokeType = []
        response.data.types.map((type) => {
          pokeType.push({ name: type.type.name })
          console.log('type.type.name', type.type.name)
        })
        const newPoke = { name: pokemon.name, img: response.data.sprites.front_default, types: pokeType }
        pokeList.push(newPoke)
        setPokeList(pokeList)
        console.log(pokeList)
      })
    }
    getList()
  }, [])

  // setTimeout(() => setReload(!relaod), 3000)

  return (
    <MainContainer>
      {pokeList.map((pokemon, index) => {
        return (
          <a key={index} onClick={() => router.push(`/pokemon/${pokemon.name}`)}>
            <div>
              <span>#{pokemon.id} </span>
              <span>{pokemon.name}</span>
              <div>
                {pokemon.types.map((natural, index) => {
                  return <div key={index}>{natural.name}</div>
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
