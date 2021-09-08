import styled from 'styled-components'

const PokeContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #4a90da;
  /* background-color: rgb(88, 171, 246); */
  /* color: rgb(139, 190, 138); */
`
const PokeHeadContainer = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  margin-bottom: 50px;
  border-bottom: 1px solid #ffffff;

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    padding-right: 30px;

    font-weight: bold;
    font-size: 60px;
    line-height: 65px;
    text-transform: capitalize;
    color: #ffffff;
    border-bottom: 1px solid #ffffff;
  }

  img {
    height: 240px;
    width: 240px;
  }
`
const EvolutionContainer = styled.div`
  display: flex;
  padding-top: 20px;
  height: 350px;
  width: 800px;
  margin-left: 23%;
  background-color: #ffffff;
  border-radius: 30px;
  justify-content: space-evenly;

  h1 {
    font-weight: bold;
    font-size: 60px;
    line-height: 65px;
    text-transform: capitalize;
    border-bottom: 1px solid #4a90da;
    color: #4a90da;
  }
`

export { PokeContainer, PokeHeadContainer, EvolutionContainer }
