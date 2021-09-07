import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { api } from '../../../services/api'

import { PokeContainer } from './styles'

type PokemonType = {
  type: {
    name: string
  }
}
type PokeProps = {
  id?: number
  name?: string | undefined
  img?: string
  types: PokemonType[]
}

const PokemonContainer = (): JSX.Element => {
  const router = useRouter()

  const [pokeInfo, setPokeInfo] = useState<PokeProps[]>([])

  useEffect(() => {
    async function getPokemon() {
      const response = await api.get(`/pokemon/${router.query.id}`)
      const responseImg = await api.get(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.data.id}.png`
      )

      setPokeInfo([
        ...pokeInfo,
        {
          id: response.data.id,
          name: response.data.name,
          img: responseImg.config.url,
          types: response.data.types
        }
      ])
    }
    getPokemon()
  }, [])

  return (
    <>
      <PokeContainer>
        {pokeInfo.map((pokemon, index) => {
          return (
            <>
              <div key={index}>
                <span>#{pokemon.id} </span>
                <span>{pokemon.name}</span>
                <div>
                  {pokemon.types.map((natural, index) => {
                    return <div key={index}>{natural.type.name}</div>
                  })}
                </div>
              </div>
              <img src={pokemon.img} alt={pokemon.name} />
            </>
          )
        })}
      </PokeContainer>
    </>
  )
}
export default PokemonContainer
