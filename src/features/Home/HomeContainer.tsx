import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

// import axios from 'axios'
import { api } from '../../services/api'

import { MainContainer, LiContent, DivContent, Content, PokemonTypes, Testee, TESTAR } from './styles'

import { PokemonContainerContext } from './PokemonContainerContextProvider'

type PokemonType = {
  type: {
    name: string
  }
}

type PokeProps = {
  id: number
  name: string
  img: string
  types: PokemonType[]
}

const HomeContainer = (): JSX.Element => {
  const { pokeList, getListPokemon, isLoading, setIsLoading } = useContext(PokemonContainerContext)
  const [loadMore, setLoadMore] = useState('/pokemon?limit=9')
  const router = useRouter()

  const getAllPokemon = async () => {
    const response = await api.get(loadMore)
    setLoadMore(response.data.next)

    getListPokemon(response.data.results)

    setIsLoading(false)
  }

  const listOrdenada = (pokeList: PokeProps[]) => {
    return pokeList.sort((a, b) => a.id - b.id)
  }

  useEffect(() => {
    getAllPokemon()
  }, [])

  return (
    <MainContainer>
      {isLoading ? (
        <div>
          <span>Carregando...</span>
        </div>
      ) : (
        <Content>
          {listOrdenada(pokeList).map((pokemon, index) => {
            console.log('AQUII', pokemon)
            return (
              <>
                <LiContent key={index} pokeType={pokemon.types[0].type.name}>
                  <a onClick={() => router.push(`/pokemon/${pokemon.name}`)}>
                    <TESTAR src="./types/pokeball.svg" />
                    <Testee src={pokemon.img} />
                    <DivContent>
                      <span>
                        #{'000'.substr(pokemon.id.toString().length)}
                        {pokemon.id}
                      </span>
                      <h2>{pokemon.name}</h2>

                      {pokemon.types.map((natural, index) => {
                        return (
                          <PokemonTypes PokemonType={natural.type.name} key={index.toString() + natural}>
                            <div>
                              <img className="Svg" src={`./types/${natural.type.name}.svg`} />
                              <p>{natural.type.name}</p>
                            </div>
                          </PokemonTypes>
                        )
                      })}
                    </DivContent>
                  </a>
                </LiContent>
              </>
            )
          })}
        </Content>
      )}
      <div>
        <button onClick={() => getAllPokemon()}>Carregar mais</button>
      </div>
    </MainContainer>
  )
}
export default HomeContainer
