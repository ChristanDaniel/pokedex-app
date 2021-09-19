import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { api } from '../../services/api'
import { NavSection } from './styles'
import pikachu from '../../../public/pikachu.png'
import Image from 'next/image'
import { PokemonContainerContext } from '../../features/Home/PokemonContainerContextProvider'

type PokemonType = {
  type: {
    name: string
    // color?: string
  }
}

type PokeProps = {
  id: number
  name: string
  img: string
  types?: PokemonType[]
  // backgroundColor?: string
}

const SeachPoke = (): JSX.Element => {
  const [inputSearch, setInputSearch] = useState('')
  const [allPokemonList, setAllPokemonList] = useState([])
  // const [pokeList, setPokeList] = useState<PokeProps[]>([])
  

  return (
    <>
      <NavSection>
        {/* <Image src={pikachu} /> */}
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
        <input placeholder="Search Pokemon" onChange={(event) => handleChangeSearchPokemon(event.target.value)} value={inputSearch} />
      </NavSection>
    </>
  )
}
export default SeachPoke
