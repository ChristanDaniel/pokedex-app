import styled from 'styled-components'

interface PokeContainerProps {
  pokeType: string
}

const PokeContainer = styled.main<PokeContainerProps>`
  width: 100%;
  height: 100vh;
  /* background-color: #e2e2e2; */
  background-color: rgb(88, 171, 246);
  /* color: rgb(139, 190, 138); */
  /* display: flex; */
  padding: 40px;
  /* justify-content: space-between; */

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

const PokeHeadContainer = styled.div`
  /* margin: 20px; */
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  /* border-bottom: 1px solid #ffffff; */
  /* justify-content: space-between; */

  > img {
    height: 180px;
    width: 180px;
    position: relative;

    /* margin-left: 50px; */
  }
`
const Teste = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  div {
    /* padding-bottom: 20px; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */

    svg {
      opacity: 0.3;
      position: absolute;
    }
    > img {
      height: 180px;
      width: 180px;
      display: flex;
      margin-left: 50px;
      margin-top: 18px;
    }

    span {
      display: flex;
      justify-content: space-around;
      text-transform: capitalize;
    }

    > p {
      display: flex;
      justify-content: center;
      padding-right: 30px;
      font-weight: bold;
      font-size: 48px;
      line-height: 65px;
      text-transform: capitalize;
      color: #ffffff;
      border-bottom: 1px solid #ffffff;
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
const EvolutionContent = styled.li`
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

    > img {
      height: 120px;
      width: 120px;
    }
  }
`

const PokebolaBackground = styled.img`
  position: absolute;
  opacity: 0.3;
`
const ImgFromPokemon = styled.img`
  position: relative;

  &:hover {
    transform: scale(1.15);
  }
  transition: 0.4s;
`
interface PokemonTypesProps {
  PokemonType: string
}

const PokemonTypes = styled.div<PokemonTypesProps>`
  /* margin-bottom: 8px; */
  display: flex;
  div {
    display: flex;

    /* align-items: center; */
    /* gap: 6px; */
    border-radius: 8px;
    /* margin-left: 5px; */

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

    > img {
      /* height: 60px; */
      width: 20px;
      height: 20px;
      margin-left: 0;
      margin-top: 0;
      background-image: image('./types/pokeballBlack.svg');
    }

    > p {
      color: #ffffff;
      font-size: 18px;
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
  PokeContainer,
  PokeHeadContainer,
  EvolutionContainer,
  EvolutionContent,
  Teste,
  UlContent,
  PokeBodyContainer,
  StatusContainer,
  PokebolaBackground,
  ImgFromPokemon,
  PokemonTypes
}
