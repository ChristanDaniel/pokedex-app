import React, { useContext, useEffect, useState } from 'react'
import { api } from '../../services/api'
import { NavSection } from './styles'
// import pikachu from '../../../public/pikachu.png'
// import Image from 'next/image'
import { PokemonContainerContext } from '../../features/Home/PokemonContainerContextProvider'

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

interface SeachPokeProps {
  results: PokeProps[]
}

const SeachPoke = (): JSX.Element => {
  const [inputSearch, setInputSearch] = useState('')
  const [allPokemonList, setAllPokemonList] = useState([])
  // const [pokeList, setPokeList] = useState<PokeProps[]>([])
  const { setPokeList, pokeList } = useContext(PokemonContainerContext)

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

  const getAllPokemon = async () => {
    const response = await api.get('/pokemon?limit=9')
    console.log('aquiii', response)
    setPokeList([])
    async function getListPokemon({ results }: SeachPokeProps) {
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

    getListPokemon(response.data.results)
  }

  const handleChangeSearchPokemon = async (value: string) => {
    inputSearch.length == 1 && getAllPokemon()
    inputSearch.length >= 2 && (await handleFiltredList(value))
    setInputSearch(value)
  }

  useEffect(() => {
    const foo = async () => {
      await handleListAllPokemon()
    }

    foo()
  }, [])

  return (
    <>
      <NavSection>
        {/* <Image src={pikachu} /> */}
        <div>
          <button>all</button>
          <button>Normal</button>
          <button>Fire</button>
          <button>Water</button>
          <button>Grass</button>
          <button>Flying</button>
          <button>Fighting</button>
          <button>Poison</button>
          <button>Electric</button>
          <button>Ground</button>
          <button>Rock</button>
          <button>Psychic</button>
          <button>Ice</button>
          <button>Bug</button>
          <button>Ghost</button>
          <button>Steel</button>
          <button>Dragon</button>
          <button>Dark </button>
          <button>Fairy</button>
        </div>
        <input placeholder="Search Pokemon" onChange={(event) => handleChangeSearchPokemon(event.target.value)} value={inputSearch} />
      </NavSection>
    </>
  )
}
export default SeachPoke
