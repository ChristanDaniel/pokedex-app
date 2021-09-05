import React from 'react'
import { useRouter } from 'next/dist/client/router'

const PokemonContainer = (): JSX.Element => {
  const router = useRouter()

  
  return <div>Pokemon : {router.query.id}</div>
}
export default PokemonContainer
