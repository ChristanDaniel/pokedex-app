import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { api } from '../../../services/api'
import Image from 'next/image'
import SetaPokemon from '../../../../public/seta.png'

import { PokeContainer, PokeHeadContainer, EvolutionContainer, EvolutionContent, Teste, UlContent } from './styles'
import axios from 'axios'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../../../components/Header'), {
  ssr: false
})

type PokemonType = {
  type: {
    name: string
    url: typeof Image
  }
}
type PokeProps = {
  id?: number
  name?: string
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

      // console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', responseSpecie)

      setEvolution([
        {
          img: response.data.sprites.other['official-artwork'].front_default,
          nameOne: responseEvolution.data.chain.species.name,
          nameTwo: responseEvolution.data.chain.evolves_to[0].species.name,
          nameThree: responseEvolution.data.chain.evolves_to[0].evolves_to[0].species.name
        }
      ])

      //   evolution.map(async (pokemonImg) => {
      //     const responseOne = await api.get(`/pokemon/${pokemonImg.nameOne}`)
      //     const responseTwo = await api.get(`/pokemon/${pokemonImg.nameTwo}`)
      //     const responseThree = await api.get(`/pokemon/${pokemonImg.nameThree}`)

      //     return setEvolution([
      //       // ...evolution,
      //       {
      //         imageOne: responseOne.data.sprites.other['official-artwork'].front_default,
      //         imageTwo: responseTwo.data.sprites.other['official-artwork'].front_default,
      //         imageThree: responseThree.data.sprites.other['official-artwork'].front_default
      //       }
      //     ])
      //   }

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
        <Header />
        {pokeInfo.map((pokemon, index) => {
          return (
            <>
              <PokeHeadContainer key={index}>
                <Teste>
                  <img src={pokemon.img} alt={pokemon.name} />
                  <div>
                    <p>#{pokemon.id} </p>
                    <p>{pokemon.name}</p>
                    {pokemon.types.map((natural, index) => {
                      return <span key={index}>{natural.type.name}</span>
                    })}
                  </div>
                </Teste>

                <UlContent>
                  <h2>Sobre: </h2>
                  <ul>
                    <li>
                      <strong>Species: </strong>
                      <span>1</span>
                    </li>
                    <li>
                      <strong>Height: </strong>
                      <span>1</span>
                    </li>
                    <li>
                      <strong>Weight: </strong>
                      <span>1</span>
                    </li>
                    <li>
                      <strong>Weaknesses: </strong>
                      <span>1</span>
                    </li>
                    <li>
                      <strong>Growth Rate: </strong>
                      <span>1</span>
                    </li>
                    <li>
                      <strong>Base Friendship: </strong>
                      <span>1</span>
                    </li>
                  </ul>
                </UlContent>
              </PokeHeadContainer>
              <EvolutionContainer>
                <h2>Evolution</h2>
                {evolution.map((pokemonEvolution, index) => {
                  return (
                    <>
                      <EvolutionContent key={index}></EvolutionContent>
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
