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
  /* margin-bottom: 8px; */
  border-radius: 8px;
  margin: 2px;
  margin-top: 6px;

  display: flex;
  align-items: center;
  justify-content: space-around;

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

  div {
    padding: 2px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const PokemonTypeSvg = styled.img`
  width: 22px;
  height: 22px;
`

const PokemonTypeName = styled.p`
  font-size: 24px;
  color: #ffffff;
  text-transform: capitalize;
`

const PokeBodyContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
`

const EvolutionContainer = styled.div`
  margin-right: 40px;
  display: flex;
  background-color: #ffffff;
  border-radius: 30px;
  margin-bottom: 4px;
  padding: 12px;

  > ul {
    width: 860px;
    display: flex;
    justify-content: space-around;
    gap: 50px;
    position: relative;

    h3 {
      position: absolute;
      font-weight: bold;
      font-size: 26px;
      margin-left: 10px;
    }
  }

  div {
    display: flex;
  }
`
const PokemonEvolutionContent = styled.li`
  /* margin: 16px 80px 10px; */
  display: flex;
  margin-top: 40px;

  a {
    display: flex;
    cursor: pointer;
    align-items: center;
    flex-direction: column;

    p {
      text-transform: capitalize;
      line-height: 26px;
      font-weight: bold;
    }
  }
`

const PokemonEvolutionId = styled.span`
  font-size: 20px;
  color: #616480;
  text-transform: capitalize;
`

const PokebolaBackgroundEvolution = styled.img`
  opacity: 0.3;
  height: 120px;
  width: 120px;
`

const ImgFromPokemonEvolution = styled.img`
  height: 110px;
  width: 110px;
  position: absolute;

  &:hover {
    transform: scale(1.1);
  }
  transition: 0.4s;
`

const PokemonTypesEvolution = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 12px;
    height: 12px;
    margin-right: 2px;
  }

  p {
    color: #ffffff;
    font-size: 12px;
    text-transform: capitalize;
  }
`

const PokemonAboutContainer = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  align-items: center;
  height: 540px;

  h4 {
    margin-bottom: 4px;
    display: flex;
    justify-content: center;

    > span {
      margin-left: 2.5px;
      text-transform: capitalize;
    }
  }

  h3 {
    margin-top: 12px;
    display: flex;
    justify-content: center;
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
  }
`
const TesteDenovo = styled.li`
  display: flex;
  align-items: center;

  > div {
    display: flex;
  }
`

const PokemonTypesWeaknesses = styled.div`
  display: flex;

  > img {
    margin: 2px;
    width: 12px;
    height: 12px;
  }
`

const StatusContainer = styled.ul`
  display: flex;
  flex-direction: column;

  h1 {
    display: flex;
    justify-content: center;
  }

  li {
    display: flex;

    strong {
      margin-right: 30px;
      text-transform: capitalize;
    }

    > span {
      color: #616480;
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
  PokemonEvolutionId,
  ImgFromPokemonEvolution,
  PokebolaBackgroundEvolution,
  PokemonTypesEvolution,
  PokemonAboutContainer,
  PokemonTypesWeaknesses,
  TesteDenovo,
  PokeBodyContainer,
  StatusContainer,
  PokebolaBackground,
  ImgFromPokemon,
  PokemonTypes
}
