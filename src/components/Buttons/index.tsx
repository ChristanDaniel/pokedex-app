import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { api } from '../../services/api'
import { PokemonContainerContext } from '../../features/Home/PokemonContainerContextProvider'

import { ButtonsTypes } from './styles'

type PokeTypeProps = {
  name: string
  url: string
}

type ListPokeTypeProps = {
  pokemon: PokeTypeProps
}

const ButtonType = (): JSX.Element => {
  const { setPokeList } = useContext(PokemonContainerContext)

  const [listPokeType, setListPokeType] = useState<PokeTypeProps[]>([])

  const handleListPokeType = async () => {
    const ResponseType = await api.get(`/type`)
    const data = ResponseType.data.results

    setListPokeType(data.slice(0, 18))
  }

  const handleClickPokeType = async (url: string) => {
    const response = await axios.get(`${url}`)
    const data = response.data.pokemon

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

  useEffect(() => {
    const foo = async () => {
      await handleListPokeType()
    }
    foo()
  }, [])

  return (
    <>
      <ButtonsTypes>
        <button>All</button>
        {listPokeType?.map((types, index) => {
          // console.log(types.url)
          return (
            <div key={index}>
              <button onClick={() => handleClickPokeType(types.url)}>{types.name}</button>
            </div>
          )
        })}
      </ButtonsTypes>
    </>
  )
}

export default ButtonType