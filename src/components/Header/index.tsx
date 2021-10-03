import React from 'react'

import { Headers } from './styles'

const Header = (): JSX.Element => {
  return (
    <>
      <Headers>
        <img src="/PokedexLogo.png" alt="logo" />

        <div>
          <img src="/Logodex.png" alt="logo" />

          <h3>
            Bem-vindo ao Pokédex-App <br /> aqui você pode conhecer mais sobre seu pokemon favorito.
          </h3>
        </div>
      </Headers>
    </>
  )
}

export default Header
