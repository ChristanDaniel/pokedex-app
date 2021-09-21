import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
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
  pokemon?: {
    name: string
  }
  id: number
  name: string
  img: string
  types: PokemonType[]
  // backgroundColor?: string
}

type ListPokeTypeProps = {
  pokemon: {
    name: string
    url: string
  }
}

const SeachPoke = (): JSX.Element => {
  const [inputSearch, setInputSearch] = useState('')
  const [allPokemonList, setAllPokemonList] = useState([])
  // const [pokeList, setPokeList] = useState<PokeProps[]>([])
  const { setPokeList, pokeList } = useContext(PokemonContainerContext)

  const [listPokeType, setListPokeType] = useState<ListPokeTypeProps[]>()

  const handleListPokeType = async () => {
    const ResponseType = await api.get(`/type`)
    const data = ResponseType.data.results

    console.log('BORAAAAAAAAAAAAAAAA', ResponseType.data)

    setListPokeType(data.slice(0, 18))
  }

  const handleClickPokeType = async (url: string) => {
    const response = await axios.get(`${url}`)
    const data = response.data.pokemon
    // console.log('DEPOOOOOIS', response.data)

    setPokeList([])
    async function getListPokemon(data: ListPokeTypeProps[]) {
      data.forEach(async (listTypesPokemon) => {
        const response = await api.get(`/pokemon/${listTypesPokemon.pokemon.name}`)

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

    getListPokemon(data)
  }

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

      await handleListPokeType()
    }

    foo()
  }, [])

  return (
    <>
      <NavSection>
        {/* <Image src={pikachu} /> */}
        <div>
          {listPokeType?.map((types, index) => {
            // console.log(types.url)
            return (
              <div key={index}>
                <button onClick={() => handleClickPokeType(types.pokemon.url)}>{types.pokemon.name}</button>
              </div>
            )
          })}
        </div>
        <input placeholder="Search Pokemon" onChange={(event) => handleChangeSearchPokemon(event.target.value)} value={inputSearch} />
      </NavSection>
    </>
  )
}
export default SeachPoke
