import React, { FormEvent, useState } from 'react'
import { api } from '../../services/api'
import { NavSection } from './styles'
// import LogoHeader1 from '../../../public/pokedexLogo.png'
// import Image from 'next/image'

const SeachPoke = (): JSX.Element => {
  const [searchPokemon, setSearchPokemon] = useState('')
  const [pokemonPesquisado, setPokemonPesquisado] = useState([])
  // const []

  const handleSeachPokemon = async (event: FormEvent) => {
    event.preventDefault()
    const response = await api.get(`/pokemon?limit=750`)

    async function handleFilterPoke() {
      if (searchPokemon === response.data.results.name) {
        const responsePoke = await api.get(`/pokemon/${pokemon.name}`)

        setPokemonPesquisado(responsePoke.data)
        return
      }
    }
    console.log('AQUIIIIIIIIIIII ', response.data)
    const resultado = response.data.results.filter(handleFilterPoke)

    // const responsePoke = await api.get(`/pokemon/${pokemon.name}`)

    console.log(pokemonPesquisado)

    // console.log(resultado)

    // setPokemonPesquisado(resultado)
    // response.data.results.forEach(async (pokemon) => {
    //   const responsePoke = await api.get(`/pokemon/${pokemon.name}`)
    //   console.log(response)
    // })

    // console.log(response.data.results.length)
  }

  return (
    <>
      <NavSection>
        <form onSubmit={handleSeachPokemon}>
          <input placeholder="Search Pokémon" onChange={(event) => setSearchPokemon(event.target.value)} value={searchPokemon} />
        </form>
        <div>
          <button>all</button>
          <button>Normal</button>
          <button>Fire</button>
          <button>Water</button>
          <button>Grass</button>
          <button>Flying</button>
          <button>Fighting</button>
          <button>Poison</button>
          <button>Electric</button>
          <button>Ground</button>
          <button>Rock</button>
          <button>Psychic</button>
          <button>Ice</button>
          <button>Bug</button>
          <button>Ghost</button>
          <button>Steel</button>
          <button>Dragon</button>
          <button>Dark </button>
          <button>Fairy</button>
        </div>
      </NavSection>

      {/* {pokemonPesquisado &&
        pokemonPesquisado.map((pokemons) => {
          ;<>
            <h1>{pokemons.name}</h1>
          </>
        })} */}
    </>
  )
}

export default SeachPoke
