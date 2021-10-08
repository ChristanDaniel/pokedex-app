import styled from 'styled-components'

interface PokeContainerProps {
  pokeType: string
}

const PokemonPageContainer = styled.main<PokeContainerProps>`
  width: 100%;
  height: 100vh;
  padding: 40px;

  display: flex;
  align-items: center;

  h3 {
    width: 100%;
  }

  background: ${(props) => {
    switch (props.pokeType) {
      case 'fire':
        return '#FFA756'
      case 'water':
        return '#58ABF6'
      case 'bug':
        return '#8BD674'
      case 'dark':
        return '#6F6E78'
      case 'dragon':
        return '#7383B9'
      case 'electric':
        return '#F2CB55'
      case 'fairy':
        return '#EBA8C3'
      case 'fighting':
        return '#83A2E3'
      case 'flying':
        return '#EB4971'
      case 'ghost':
        return '#8571BE'
      case 'grass':
        return '#8BBE8A'
      case 'ground':
        return '#F78551'
      case 'ice':
        return '#91D8DF'
      case 'normal':
        return '#B5B9C4'
      case 'poison':
        return '#9F6E97'
      case 'psychic':
        return '#FF6568'
      case 'rock':
        return '#D4C294'
      case 'steel':
        return '#4C91B2'
      default:
        return 'white'
    }
  }};
`

const PokemonBodyContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 40px;

  > div {
    display: flex;
  }
`
const PokebolaBackground = styled.img`
  opacity: 0.3;
  height: 200px;
  width: 200px;
`

const ImgFromPokemon = styled.img`
  height: 180px;
  width: 180px;
  position: absolute;

  &:hover {
    transform: scale(1.1);
  }
  transition: 0.4s;
`

const PokemonDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
`

const PokemonId = styled.p`
  font-weight: bold;
  font-size: 38px;
  color: #ffffff;
`

const PokemonName = styled.p`
  font-weight: bold;
  font-size: 38px;
  text-transform: capitalize;
  color: #ffffff;
  margin-bottom: 20px;
`

const PokemonDescriptionsType = styled.div`
  display: flex;
  gap: 16px;
`

interface PokemonTypesProps {
  PokemonType: string
}

const PokemonTypes = styled.div<PokemonTypesProps>`
  margin-bottom: 8px;
  height: 40px;

  div {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 4px;
    border-radius: 8px;

    background: ${(props) => {
      switch (props.PokemonType) {
        case 'fire':
          return '#FD7D24'
        case 'water':
          return '#4A90DA'
        case 'bug':
          return '#8CB230'
        case 'dark':
          return '#58575F'
        case 'dragon':
          return '#0F6AC0'
        case 'electric':
          return '#EED535'
        case 'fairy':
          return '#ED6EC7'
        case 'fighting':
          return '#D04164'
        case 'flying':
          return '#748FC9'
        case 'ghost':
          return '#556AAE'
        case 'grass':
          return '#62B957'
        case 'ground':
          return '#DD7748'
        case 'ice':
          return '#61CEC0'
        case 'normal':
          return '#9DA0AA'
        case 'poison':
          return '#A552CC'
        case 'psychic':
          return '#EA5D60'
        case 'rock':
          return '#BAAB82'
        case 'steel':
          return '#417D9A'
        default:
          return 'white'
      }
    }};
  }
`

const PokemonTypeSvg = styled.img`
  width: 20px;
  height: 20px;
`

const PokemonTypeName = styled.p`
  font-size: 20px;
  color: #ffffff;
  text-transform: capitalize;
`

/////////////////////////////////////////////

const PokeBodyContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
`

const EvolutionContainer = styled.div`
  display: flex;
  /* padding-top: 20px; */
  background-color: #ffffff;
  border-radius: 30px;
  flex-direction: column;

  h2 {
    /* display: flex;
    justify-content: center;
    align-content: center; */
    margin-left: 60px;

    font-weight: bold;
    font-size: 40px;
    line-height: 65px;
  }

  div {
    display: flex;
    flex-direction: row;
    /* gap: 100px; */
  }
`
const PokemonEvolutionContent = styled.li`
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-direction: column;
  margin: 16px 100px 10px;

  a {
    cursor: pointer;
    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-transform: capitalize;
      line-height: 26px;
      font-weight: bold;
    }
  }
`

const UlContent = styled.div`
  background-color: #ffffff;
  margin-right: 150px;
  padding: 16px;
  /* border: 1px solid #ffff; */
  border-radius: 12px;
  align-items: center;

  h2 {
    margin-bottom: 24px;
  }

  li {
    gap: 50px;
    display: flex;
    justify-content: space-between;

    strong {
      margin-right: 30px;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
      height: 90px;
      width: 90px;
    }
  }
`

const StatusContainer = styled.div`
  li {
    gap: 50px;
    display: flex;
    justify-content: space-between;

    strong {
      margin-right: 30px;
      text-transform: capitalize;
    }
  }
`

export {
  PokemonPageContainer,
  PokemonBodyContent,
  PokemonDescription,
  PokemonId,
  PokemonName,
  PokemonDescriptionsType,
  PokemonTypeSvg,
  PokemonTypeName,
  EvolutionContainer,
  PokemonEvolutionContent,
  UlContent,
  PokeBodyContainer,
  StatusContainer,
  PokebolaBackground,
  ImgFromPokemon,
  PokemonTypes
}
