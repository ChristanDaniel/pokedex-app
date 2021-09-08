import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { api } from '../../../services/api'
import Image from 'next/image'
// import fotoPokebola from '../../../../public/beckPokedex.png'

import { PokeContainer, PokeHeadContainer, EvolutionContainer } from './styles'

type PokemonType = {
  type: {
    name: string
    url: typeof Image
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
  // const [evolution, setEvolution] = useState([])

  useEffect(() => {
    async function getPokemon() {
      const response = await api.get(`/pokemon/${router.query.id}`)
      const responseImg = await api.get(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.data.id}.png`
      )
      const responseEvolution = await api.get(`https://pokeapi.co/api/v2/evolution-chain/${response.data.id}/`)

      console.log('OLHA EU DE NOVO', responseEvolution)

      setPokeInfo([
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
              <PokeHeadContainer key={index}>
                <div>
                  <span>#{pokemon.id} </span>
                  <span>{pokemon.name}</span>
                  {pokemon.types.map((natural, index) => {
                    return <div key={index}>{natural.type.name}</div>
                  })}
                </div>
                <img src={pokemon.img} alt={pokemon.name} />
              </PokeHeadContainer>
              <EvolutionContainer>
                <h1>Evolution</h1>
                <div>
                  <img />
                  <div></div>
                </div>
              </EvolutionContainer>
            </>
          )
        })}
      </PokeContainer>
    </>
  )
}
export default PokemonContainer
