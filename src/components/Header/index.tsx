import React from 'react'

import Image from 'next/image'
import LogoHeader from '../../../public/PokedexLogo.png'
import LogoHeader1 from '../../../public/Logodex.png'

import { Headers } from './styles'

const Header = (): JSX.Element => {
  return (
    <>
      <Headers>
        <Image src={LogoHeader} alt="logo" />

        <div>
          <Image src={LogoHeader1} alt="logo" />

          <h3>
            Bem-vindo ao Pokédex-App <br /> aqui você pode conhecer mais sobre seu pokemon favorito.
          </h3>
        </div>
      </Headers>
    </>
  )
}

export default Header
