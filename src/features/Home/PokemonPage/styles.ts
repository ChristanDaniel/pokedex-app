import styled from 'styled-components'

const PokeContainer = styled.main`
  width: 100%;
  height: 100vh;
  /* background-color: #e2e2e2; */
  background-color: rgb(88, 171, 246);
  /* color: rgb(139, 190, 138); */
  display: flex;
  justify-content: space-between;
`

const PokeHeadContainer = styled.div`
  /* margin: 20px; */
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  /* border-bottom: 1px solid #ffffff; */
  /* justify-content: space-between; */

  img {
    height: 180px;
    width: 180px;
    /* margin-left: 50px; */
  }
`
const Teste = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  div {
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */

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
    display: flex;
    justify-content: center;
    align-content: center;

    font-weight: bold;
    font-size: 40px;
    line-height: 65px;
    color: #4a90da;
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
      height: 100px;
      width: 100px;
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

export { PokeContainer, PokeHeadContainer, EvolutionContainer, EvolutionContent, Teste, UlContent, PokeBodyContainer, StatusContainer }
