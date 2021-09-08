import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { api } from '../../../services/api'
import Image from 'next/image'
// import fotoPokebola from '../../../../public/beckPokedex.png'

import { PokeContainer, PokeHeadContainer, EvolutionContainer } from './styles'
import axios from 'axios'

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
  const [evolution, setEvolution] = useState([])

  useEffect(() => {
    async function getPokemon() {
      const response = await api.get(`/pokemon/${router.query.id}`)
      const responseImg = await api.get(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.data.id}.png`
      )
      const responseSpecie = await api.get(`https://pokeapi.co/api/v2/pokemon-species/${response.data.name}/`)
      const responseEvolution = await axios.get(`${responseSpecie.data.evolution_chain.url}`)

      setEvolution([
        {
          nameOne: responseEvolution.data.chain.species.name,
          nameTwo: responseEvolution.data.chain.evolves_to[0].species.name,
          nameThree: responseEvolution.data.chain.evolves_to[0].evolves_to[0].species.name
        }
      ])
      console.log('NAMEEEES', evolution)

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
                {evolution.map((pokemon, index) => {
                  return (
                    <>
                      <div key={index}>
                        <img />
                        <p>{pokemon.nameOne}</p>
                        <p>{pokemon.nameTwo}</p>
                        <p>{pokemon.nameThree}</p>
                      </div>
                    </>
                  )
                })}
              </EvolutionContainer>
            </>
          )
        })}
      </PokeContainer>
    </>
  )
}
export default PokemonContainer
