import styled from 'styled-components'

const PokeContainer = styled.main`
  width: 100%;
  height: 100vh;
  /* background-color: #e2e2e2; */
  background-color: rgb(88, 171, 246);
  /* color: rgb(139, 190, 138); */
`

const PokeHeadContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* align-content: center; */
  align-items: center;
  margin-bottom: 50px;
  border-bottom: 1px solid #ffffff;
  justify-content: space-between;

  img {
    height: 180px;
    width: 180px;
    margin: 50px;
  }

  > div {
    margin-right: 150px;
    padding: 56px;
    border: 1px solid #ffffff;
  }
`

const Teste = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    p {
      display: flex;
    }
    > span {
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
const EvolutionContainer = styled.div`
  display: flex;
  padding-top: 20px;
  height: 350px;
  width: 800px;
  margin-left: 23%;
  background-color: #ffffff;
  border-radius: 30px;
  flex-direction: column;

  h1 {
    display: flex;
    justify-content: center;
    align-content: center;

    font-weight: bold;
    font-size: 60px;
    line-height: 65px;
    /* text-transform: capitalize; */
    color: #4a90da;
  }
`
const EvolutionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-direction: column;
  margin: 32px;

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: capitalize;
    line-height: 26px;
    font-weight: bold;
    border-top: 1px solid #4a90da;

    img {
      height: 150px;
      border-top: 1px solid #4a90da;
      width: 150px;
    }
  }
`

export { PokeContainer, PokeHeadContainer, EvolutionContainer, EvolutionContent, Teste }
