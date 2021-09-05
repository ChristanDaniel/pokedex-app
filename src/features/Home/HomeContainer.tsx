import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/dist/client/router'

const HomeContainer = (): JSX.Element => {
  const [pokeList, setPokeList] = useState([{ name: 'nome', img: 'img', types: [] }])
  const [relaod, setReload] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function getList() {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=9')
      response.data.results.map(async (pokemon) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const pokeType = []
        response.data.types.map((type) => {
          pokeType.push({ name: type.type.name })
          console.log('type.type.name', type.type.name)
        })
        const newPoke = { name: pokemon.name, img: response.data.sprites.front_default, types: pokeType }
        pokeList.push(newPoke)
        setPokeList(pokeList)
        console.log(pokeList)
      })
    }
    getList()
  }, [pokeList, relaod])

  // setTimeout(() => setReload(!relaod), 3000)

  return (
    <div>
      {pokeList &&
        pokeList?.map((pokemon, index) => {
          return (
            <div key={index} onClick={() => router.push(`/pokemon/${pokemon.name}`)}>
              <h1>{pokemon.name}</h1>
              <img src={pokemon.img} />
              {pokemon.types.map((type) => {
                console.log(type.name)
                return <h1 key={type.name}>{type.name}</h1>
              })}
            </div>
          )
        })}
    </div>
  )
}
export default HomeContainer
