import React, { createContext, useState } from 'react'
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

interface IPokemonContainerProps {
  getAllPokemon: (credentials?: PokeProps[]) => Promise<void>
  getListPokemon: (credentials: PokeProps[]) => Promise<void>
  pokeList: PokeProps[]
  setPokeList: React.Dispatch<React.SetStateAction<PokeProps[]>>
}

const PokemonContainerContext = createContext({} as IPokemonContainerProps)

const PokemonContainerProvider: React.FC = ({ children }) => {
  const [pokeList, setPokeList] = useState<PokeProps[]>([])

  async function getListPokemon(results: PokeProps[]) {
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
    })
  }

  const getAllPokemon = async () => {
    const response = await api.get('/pokemon?limit=9')

    setPokeList([])

    getListPokemon(response.data.results)
  }

  return <PokemonContainerContext.Provider value={{ pokeList, setPokeList, getAllPokemon, getListPokemon }}>{children}</PokemonContainerContext.Provider>
}

export { PokemonContainerProvider, PokemonContainerContext }
