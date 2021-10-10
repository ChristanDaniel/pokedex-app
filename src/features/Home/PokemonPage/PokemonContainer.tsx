import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { api } from '../../../services/api'
import Image from 'next/image'
// import SetaPokemon from '../../../../public/seta.png'

import {
  PokemonPageContainer,
  PokemonBodyContent,
  PokemonDescription,
  PokemonId,
  PokemonName,
  PokemonDescriptionsType,
  PokemonTypeSvg,
  PokemonTypeName,
  EvolutionContainer,
  PokemonEvolutionContent,
  PokemonEvolutionId,
  PokebolaBackgroundEvolution,
  ImgFromPokemonEvolution,
  PokemonTypesEvolution,
  PokemonAboutContainer,
  PokemonTypesWeaknesses,
  TesteDenovo,
  StatusContainer,
  PokebolaBackground,
  ImgFromPokemon,
  PokemonTypes
} from './styles'
import axios from 'axios'
// import { PokeballBlack } from '../../../../public/types'
// import { CustomSVG } from '../../../components/CustomSVG'
// import dynamic from 'next/dynamic'

// const Header = dynamic(() => import('../../../components/Header'), {
//   ssr: false
// })

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
  url?: string
  types: PokemonType[]
}

type AboutPokeProps = {
  name?: string
  value?: string
}

type EvolutionProps = {
  id: number
  name?: string
  url?: string
  types: PokemonType[]
}

type EvolutionNameProps = {
  name?: string
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
  const [evolution, setEvolution] = useState<EvolutionProps[]>([])
  const [evolutionName, setEvolutionName] = useState<EvolutionNameProps[]>([])
  // const [evolutionImg, setEvolutionImg] = useState([])
  const [pokeStatus, setPokeStatus] = useState<PokeStatusProps[]>([])
  const [aboutPoke, setAboutPoke] = useState<AboutPokeProps[]>([])
  const [pokemonDamageType, setPokemonDamageType] = useState([])
  const [pokemonDamageToType, setPokemonDamageToType] = useState([])

  const getPokemonStatus = async () => {
    const response = await api.get(`/pokemon/${router.query.id}`)
    console.log('aquiiiiiiii', response)

    setPokeStatus(response.data.stats)

    getWeaknessesTypes(response.data.types[0].type.url)

    setPokeInfo([
      {
        id: response.data.id,
        name: response.data.name,
        img: response.data.sprites.other['official-artwork'].front_default,
        url: response.data.sprites.front_shiny,
        types: response.data.types
      }
    ])

    setAboutPoke([
      {
        name: 'Height',
        value: response.data.height / 10 + ' M'
      },
      {
        name: 'Weight',
        value: response.data.weight / 100 + ' KG'
      }
    ])
  }

  const getPokemonSpecie = async () => {
    const response = await api.get(`https://pokeapi.co/api/v2/pokemon-species/${router.query.id}/`)
    await getEvolutionPokemon(response.data.evolution_chain.url)

    return setAboutPoke((pokemon) => [
      ...pokemon,
      {
        name: 'Base Friendship',
        value: response.data.base_happiness
      },
      {
        name: 'Growth Rate',
        value: response.data.growth_rate.name
      },
      {
        name: 'Generation',
        value: response.data.generation.name
      }
    ])
  }

  const getEvolutionPokemon = async (url: string) => {
    const response = await axios.get(`${url}`)

    console.log('BORAAAAAAAAAAAA AQUY', response)

    setEvolutionName([
      {
        name: response.data.chain.species?.name
      },
      {
        name: response.data.chain.evolves_to[0]?.species.name
      },
      {
        name: response.data.chain.evolves_to[0].evolves_to[0]?.species.name
      }
    ])
  }

  const getImgPokemon = async () => {
    setEvolution([])

    evolutionName.forEach(async (pokemon) => {
      if (pokemon.name) {
        const responseImg = await api.get(`/pokemon/${pokemon.name}`)

        return setEvolution((pokemon) => [
          ...pokemon,
          {
            id: responseImg.data.id,
            name: responseImg.data.name,
            url: responseImg.data.sprites.other['official-artwork'].front_default,
            types: responseImg.data.types
          }
        ])
      }
    })
  }

  const getWeaknessesTypes = async (url: string) => {
    const response = await axios.get(`${url}`)

    console.log(response)

    setPokemonDamageType(response.data.damage_relations.double_damage_from)
    setPokemonDamageToType(response.data.damage_relations.double_damage_to)
  }

  const listOrdenadaEvolution = (evolution: EvolutionProps[]) => {
    return evolution.sort((a, b) => a.id - b.id)
  }

  useEffect(() => {
    async function getInfoPokemon() {
      await getPokemonStatus()
      await getPokemonSpecie()
    }

    getInfoPokemon()
  }, [router])

  useEffect(() => {
    async function getPokemon() {
      await getImgPokemon()
    }

    getPokemon()
  }, [evolutionName])

  return (
    <>
      {/* <Header /> */}
      {pokeInfo.map((pokemon) => {
        return (
          <>
            <PokemonPageContainer key={pokemon.id} pokeType={pokemon.types[0].type.name}>
              <PokemonBodyContent>
                <div>
                  <PokebolaBackground src="/types/pokeball.svg" />
                  <ImgFromPokemon src={pokemon.img} alt={pokemon.name} />
                  <PokemonDescription>
                    <PokemonId>
                      # {'000'.substr(pokemon.id.toString().length)}
                      {pokemon.id}
                    </PokemonId>
                    <PokemonName>{pokemon.name}</PokemonName>
                    <PokemonDescriptionsType>
                      {pokemon.types.map((natural, index) => {
                        return (
                          <PokemonTypes PokemonType={natural.type.name} key={index.toString() + natural}>
                            <div>
                              <PokemonTypeSvg src={`/types/${natural.type.name}.svg`} />
                              <PokemonTypeName>{natural.type.name}</PokemonTypeName>
                            </div>
                          </PokemonTypes>
                        )
                      })}
                    </PokemonDescriptionsType>
                  </PokemonDescription>
                </div>

                <EvolutionContainer>
                  <h3>Evolution</h3>
                  <div>
                    {listOrdenadaEvolution(evolution).map((pokemonEvolution) => {
                      return (
                        <>
                          <PokemonEvolutionContent key={pokemonEvolution.id}>
                            <a onClick={() => router.push(`/pokemon/${pokemonEvolution.name}`)}>
                              <PokemonEvolutionId>
                                # {'000'.substr(pokemonEvolution.id.toString().length)}
                                {pokemonEvolution.id}
                              </PokemonEvolutionId>
                              <p>{pokemonEvolution.name}</p>
                              <div>
                                <PokebolaBackgroundEvolution src="/types/pokeballBlack.svg" />
                                <ImgFromPokemonEvolution src={pokemonEvolution.url} alt="evolução do pokemon" />
                              </div>
                              <div>
                                {pokemonEvolution.types.map((pokeTypes) => {
                                  return (
                                    <>
                                      <PokemonTypes PokemonType={pokeTypes.type.name} key={pokemon.id}>
                                        <PokemonTypesEvolution>
                                          <img src={`/types/${pokeTypes.type.name}.svg`} />
                                          <p>{pokeTypes.type.name}</p>
                                        </PokemonTypesEvolution>
                                      </PokemonTypes>
                                    </>
                                  )
                                })}
                              </div>
                            </a>
                          </PokemonEvolutionContent>
                        </>
                      )
                    })}
                  </div>
                </EvolutionContainer>
              </PokemonBodyContent>

              <PokemonAboutContainer>
                <h4>
                  Shiny<span>{pokemon.name}</span>
                </h4>
                <div>
                  <PokebolaBackgroundEvolution src="/types/pokeballBlack.svg" />
                  <ImgFromPokemonEvolution src={pokemon.url} />
                </div>
                <h3>Pokemon About: </h3>
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
                  <TesteDenovo>
                    <strong>Weaknesses: </strong>
                    <div>
                      {pokemonDamageType.map((teste, index) => {
                        return (
                          <>
                            <PokemonTypes PokemonType={teste.name} key={teste.name + index}>
                              <PokemonTypesWeaknesses>
                                <img src={`/types/${teste.name}.svg`} />
                                {/* <p>{pokeTypes.type.name}</p> */}
                              </PokemonTypesWeaknesses>
                            </PokemonTypes>
                          </>
                        )
                      })}
                    </div>
                  </TesteDenovo>
                  <TesteDenovo>
                    <strong>Forte contra: </strong>
                    <div>
                      {pokemonDamageToType.map((teste, index) => {
                        return (
                          <>
                            <PokemonTypes PokemonType={teste.name} key={pokemon.id + index}>
                              <PokemonTypesWeaknesses>
                                <img src={`/types/${teste.name}.svg`} />
                                {/* <p>{pokeTypes.type.name}</p> */}
                              </PokemonTypesWeaknesses>
                            </PokemonTypes>
                          </>
                        )
                      })}
                    </div>
                  </TesteDenovo>
                </ul>
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
              </PokemonAboutContainer>
            </PokemonPageContainer>
          </>
        )
      })}
    </>
  )
}
export default PokemonContainer
