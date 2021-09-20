import React, { createContext, useState } from 'react'

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
  pokeList: PokeProps[]
  setPokeList: React.Dispatch<React.SetStateAction<PokeProps[]>>
}

const PokemonContainerContext = createContext({} as IPokemonContainerProps)

const PokemonContainerProvider: React.FC = ({ children }) => {
  const [pokeList, setPokeList] = useState<PokeProps[]>([])

  return <PokemonContainerContext.Provider value={{ pokeList, setPokeList }}>{children}</PokemonContainerContext.Provider>
}

export { PokemonContainerProvider, PokemonContainerContext }
