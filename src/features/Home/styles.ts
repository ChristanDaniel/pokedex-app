import styled from 'styled-components'

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: center;
    margin-bottom: 18px;
  }

  button {
    width: 385px;
    height: 40px;
    border-radius: 8px;
    font-weight: 500;
    background: #616480;
    color: #fff;
    padding: 0 28px;

    cursor: pointer;
    border: 0;

    transition: 0.3s;

    :hover {
      filter: brightness(0.7);
    }
  }
`
const Content = styled.main`
  width: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 810px) {
    grid-template-columns: repeat(1, 1fr);
  }

  margin: 45px;
  gap: 30px;
`
interface LiContentProps {
  pokeType: string
}

const LiContent = styled.li<LiContentProps>`
  border-radius: 10px;
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
        return '#EB4971'
      case 'flying':
        return '#83A2E3'
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

  box-shadow: rgb(0 0 0 / 30%) 1px 3px 12px 0px;
  max-height: 240px;
  max-width: 400px;
  justify-content: center;

  :hover {
    filter: brightness(0.9);
    border-radius: 15px;
  }
  transition: 0.3s;

  a {
    display: flex;
    align-items: center;

    img {
      padding-left: 20px;
      height: 170px;
    }
  }
`

const DivContent = styled.div`
  margin-top: 5px;
  margin-left: 26px;

  span {
    font-size: 22px;
    color: #ffffff;
  }

  h2 {
    font-weight: bold;
    font-size: 30px;
    text-transform: capitalize;
    color: #ffffff;
  }

  div {
    display: flex;

    p {
      font-size: 15px;
      text-transform: capitalize;
      margin-top: 8px;
      padding-right: 15px;
    }
  }
`
interface PokemonTypesProps {
  PokemonType: string
}

const PokemonTypes = styled.div<PokemonTypesProps>`
  margin-bottom: 8px;
  display: flex;
  div {
    display: flex;
    align-items: center;
    gap: 6px;
    border-radius: 8px;
    margin-left: 5px;
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

    img {
      /* height: 60px; */
      width: 40px;
      height: 40px;
    }

    p {
      color: #ffffff;
      font-size: 18px;
    }
  }
`

const ImgFromPokemon = styled.img`
  position: absolute;
  transition: 0.4s;
  &:hover {
    transform: scale(1.12);
  }
`
const PokebolaBackground = styled.img`
  opacity: 0.3;
`

export { MainContainer, LiContent, DivContent, Content, PokemonTypes, ImgFromPokemon, PokebolaBackground }
