import React from 'react'

type PokemonType = {
  type: {
    name: string
    url: typeof Image
  }
}
type PokeProps = {
  id?: number
  name?: string
  image?: string
  types: PokemonType[]
}

export default function PokemonList({ id, image, name, type }: PokeProps) {
  return (
    <MainContainer>
      <ul>
        <li>
          <a onClick={() => router.push(`/pokemon/${name}`)}>
            <div>
              <span>#{id} </span>
              <span>{name}</span>
              <div>
                <div>{type}</div>
              </div>
            </div>
            <img src={image} />
          </a>
        </li>
      </ul>
    </MainContainer>
  )
}
