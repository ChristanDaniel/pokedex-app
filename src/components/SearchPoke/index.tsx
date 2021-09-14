import React, { FormEvent, useState } from 'react'
import { api } from '../../services/api'
import { NavSection } from './styles'
// import LogoHeader1 from '../../../public/pokedexLogo.png'
// import Image from 'next/image'

const SeachPoke = (): JSX.Element => {
  const [searchPokemon, setSearchPokemon] = useState('')
  // const []

  const handleSeachPokemon = async (event: FormEvent) => {
    event.preventDefault()
    const response = await api.get(`pokemon?limit=1118`)
    response.results.forEach(async (pokemon) => {
      const response = await api.get(`/pokemon/${pokemon.name}`)
      console.log(response)
    })
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
    </>
  )
}

export default SeachPoke
