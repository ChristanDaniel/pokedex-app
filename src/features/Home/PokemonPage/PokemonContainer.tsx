import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { api } from '../../../services/api'
import Image from 'next/image'
import SetaPokemon from '../../../../public/seta.png'

import { PokeContainer, PokeHeadContainer, EvolutionContainer, EvolutionContent } from './styles'
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
  const [evolutionImg, setEvolutionImg] = useState([])

  useEffect(() => {
    async function getPokemon() {
      const response = await api.get(`/pokemon/${router.query.id}`)
      // const responsePokemon = await api.get(
      //   `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.data.sprites.other['official-artwork'].front_default}.png`
      // )
      const responseSpecie = await api.get(`https://pokeapi.co/api/v2/pokemon-species/${response.data.name}/`)
      const responseEvolution = await axios.get(`${responseSpecie.data.evolution_chain.url}`)

      console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', responseSpecie)

      setEvolution([
        {
          // img: response.data.sprites.other['official-artwork'].front_default,
          nameOne: responseEvolution.data.chain.species.name,
          nameTwo: responseEvolution.data.chain.evolves_to[0].species.name,
          nameThree: responseEvolution.data.chain.evolves_to[0].evolves_to[0].species.name
        }
      ])

      evolution.map(async (pokemonImg) => {
        const responseOne = await api.get(`/pokemon/${pokemonImg.nameOne}`)
        const responseTwo = await api.get(`/pokemon/${pokemonImg.nameTwo}`)
        const responseThree = await api.get(`/pokemon/${pokemonImg.nameThree}`)

        return setEvolution([
          // ...evolution,
          {
            imageOne: responseOne.data.sprites.other['official-artwork'].front_default,
            imageTwo: responseTwo.data.sprites.other['official-artwork'].front_default,
            imageThree: responseThree.data.sprites.other['official-artwork'].front_default
          }
        ])
      })

      setPokeInfo([
        {
          id: response.data.id,
          name: response.data.name,
          img: response.data.sprites.other['official-artwork'].front_default,
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
                {evolution.map((pokemonEvolution, index) => {
                  return (
                    <>
                      <EvolutionContent key={index}>
                        <p>
                          {pokemonEvolution.nameOne}
                          <img src={pokemonEvolution.imageOne} />
                        </p>

                        <Image src={SetaPokemon} alt="logo" width={90} />

                        <p>
                          {pokemonEvolution.nameTwo}
                          <img src={pokemonEvolution.imageTwo} />
                        </p>

                        <Image src={SetaPokemon} alt="logo" width={90} />

                        <p>
                          {pokemonEvolution.nameThree}
                          <img src={pokemonEvolution.imageThree} />
                        </p>
                      </EvolutionContent>
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
