import React from 'react'
import { NavSection } from './styles'
// import LogoHeader1 from '../../../public/pokedexLogo.png'
// import Image from 'next/image'

const SeachPoke = (): JSX.Element => {
  return (
    <>
      <NavSection>
        <input placeholder="Search Pokémon"></input>
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
