import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { api } from '../../../services/api'
import Image from 'next/image'
import SetaPokemon from '../../../../public/seta.png'

import { PokeContainer, PokeHeadContainer, EvolutionContainer, EvolutionContent, Teste, UlContent, PokeBodyContainer, StatusContainer } from './styles'
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
  id: number
  name: string
  img: string
  types: PokemonType[]
}

type AboutPokeProps = {
  name: string
  value: string
}

type TESTE = {
  Height?: number
  weight?: string
  Weaknesses?: string
  Growth_Rate?: string
  Base_Friendship?: string
  Friendship?: string
}

type PokeStatusProps = {
  base_stat: string
  stat: {
    name: string
  }
}

const PokemonContainer = (): JSX.Element => {
  const router = useRouter()

  const [pokeInfo, setPokeInfo] = useState<PokeProps[]>([])
  const [evolution, setEvolution] = useState([])
  // const [evolutionImg, setEvolutionImg] = useState([])
  const [pokeStatus, setPokeStatus] = useState<PokeStatusProps[]>([])
  const [aboutPoke, setAboutPoke] = useState<AboutPokeProps[]>([])

  console.log('VAMOS VER', pokeStatus)

  const getPokemonStatus = async () => {
    const response = await api.get(`/pokemon/${router.query.id}`)

    setPokeStatus(response.data.stats)

    console.log('AQUIII', response)

    setPokeInfo([
      {
        id: response.data.id,
        name: response.data.name,
        img: response.data.sprites.other['official-artwork'].front_default,
        types: response.data.types
      }
    ])

    setAboutPoke([
      {
        name: 'Height',
        value: response.data.height
      },
      {
        name: 'Weight',
        value: response.data.weight
      }
    ])
    console.log('AGORA AQUIII', aboutPoke)
  }

  const getPokemonSpecie = async () => {
    const responseSpecie = await api.get(`https://pokeapi.co/api/v2/pokemon-species/${router.query.id}/`)

    console.log('AEEEEEEEEEEE', responseSpecie)

    return setAboutPoke((pokemon) => [
      ...pokemon,
      {
        name: 'Base_Friendship',
        value: responseSpecie.data.base_happiness
      },
      {
        name: 'Growth Rate',
        value: responseSpecie.data.growth_rate.name
      },
      {
        name: 'Generation',
        value: responseSpecie.data.generation.name
      }
    ])
  }
  console.log(aboutPoke)

  useEffect(() => {
    async function getPokemon() {
      await getPokemonStatus()
      await getPokemonSpecie()

      // const response = await api.get(`/pokemon/${router.query.id}`)

      // console.log('AEEEEEEE', response)
      // const responsePokemon = await api.get(
      //   `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.data.sprites.other['official-artwork'].front_default}.png`
      // )
      // const responseSpecie = await api.get(`https://pokeapi.co/api/v2/pokemon-species/${response.data.name}/`)
      // const responseEvolution = await axios.get(`${responseSpecie.data.evolution_chain.url}`)

      // setEvolution([
      //   {
      //     img: response.data.sprites.other['official-artwork'].front_default,
      //     nameOne: responseEvolution.data.chain.species.name,
      //     nameTwo: responseEvolution.data.chain.evolves_to[0].species.name,
      //     nameThree: responseEvolution.data.chain.evolves_to[0].evolves_to[0].species.name
      //   }
      // ])

      // evolution.map(async (pokemonImg) => {
      //   const responseOne = await api.get(`/pokemon/${pokemonImg.nameOne}`)
      //   const responseTwo = await api.get(`/pokemon/${pokemonImg.nameTwo}`)
      //   const responseThree = await api.get(`/pokemon/${pokemonImg.nameThree}`)

      //   return setEvolution([
      //     ...evolution,
      //     {
      //       imageOne: responseOne.data.sprites.other['official-artwork'].front_default,
      //       imageTwo: responseTwo.data.sprites.other['official-artwork'].front_default,
      //       imageThree: responseThree.data.sprites.other['official-artwork'].front_default
      //     }
      //   ])
      // })
    }
    getPokemon()
  }, [])

  console.log(typeof aboutPoke)
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
                    {aboutPoke.map((teste, index) => {
                      return (
                        <>
                          <li key={index}>
                            <strong>{teste.name}: </strong>
                            <span>{teste.value}</span>
                          </li>
                        </>
                      )
                    })}
                  </ul>
                </UlContent>
              </PokeHeadContainer>
            </>
          )
        })}
        <PokeBodyContainer>
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
          <StatusContainer>
            <h1>Status</h1>
            <ul>
              {pokeStatus.map((pokemonStatus) => {
                return (
                  <>
                    <li>
                      <strong>{pokemonStatus.stat.name}:</strong>
                      <span>{pokemonStatus.base_stat}</span>
                    </li>
                  </>
                )
              })}
            </ul>
          </StatusContainer>
        </PokeBodyContainer>
      </PokeContainer>
    </>
  )
}
export default PokemonContainer
