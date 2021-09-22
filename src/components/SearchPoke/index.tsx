import React, { useContext, useEffect, useState } from 'react'
// import axios from 'axios'
import { api } from '../../services/api'
import { NavSection } from './styles'
// import pikachu from '../../../public/pikachu.png'
// import Image from 'next/image'
import { PokemonContainerContext } from '../../features/Home/PokemonContainerContextProvider'
import ButtonType from '../Buttons'

type PokemonType = {
  type: {
    name: string
    // color?: string
  }
}

type PokeProps = {
  pokemon?: {
    name: string
  }
  id: number
  name: string
  img: string
  types: PokemonType[]
  // backgroundColor?: string
}

const SeachPoke = (): JSX.Element => {
  const [inputSearch, setInputSearch] = useState('')
  const [allPokemonList, setAllPokemonList] = useState([])
  const { pokeList, setPokeList, getAllPokemon } = useContext(PokemonContainerContext)

  // const [listPokeType, setListPokeType] = useState<ListPokeTypeProps[]>([])

  const handleListAllPokemon = async () => {
    if (allPokemonList.length === 0) {
      const response = await api.get(`/pokemon?limit=750`)
      const AllPokemons = response.data.results
      setAllPokemonList(AllPokemons)
    }
  }

  const handleFiltredList = async (value: string) => {
    if (value.length > 2) {
      const filtredList = allPokemonList.filter((pokemon: PokeProps) => pokemon.name.includes(value))
      setPokeList([])
      filtredList.forEach(async (pokemon: PokeProps) => {
        const response = await api.get(`/pokemon/${pokemon.name}`)
        if (pokeList.length > 9) {
          return
        }
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
  }

  const handleChangeSearchPokemon = async (value: string) => {
    inputSearch.length == 1 && getAllPokemon()
    inputSearch.length >= 2 && (await handleFiltredList(value))
    setInputSearch(value)
  }

  useEffect(() => {
    const foo = async () => {
      await handleListAllPokemon()
      // await handleListPokeType()
    }

    foo()
  }, [])

  return (
    <>
      <NavSection>
        <ButtonType />
        <input placeholder="Search Pokemon" onChange={(event) => handleChangeSearchPokemon(event.target.value)} value={inputSearch} />
      </NavSection>
    </>
  )
}
export default SeachPoke
