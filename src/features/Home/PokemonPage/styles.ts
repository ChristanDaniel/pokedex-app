import styled from 'styled-components'

const PokeContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #4a90da;
`
const PokeHeadContainer = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding-top: 40px;

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
    border-bottom: 1px solid #ffffffff;
  }

  img {
    height: 180px;
    width: 180px;
  }
`

export { PokeContainer, PokeHeadContainer }
