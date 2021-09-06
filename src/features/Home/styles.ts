import styled from 'styled-components'

const MainContainer = styled.main`
  width: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 60px;
  gap: 60px;

  a {
    display: flex;
    width: inherit;
    /* background: ; */
    height: 180px;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 30%) 1px 3px 12px 0px;
    transition: 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }
`

export { MainContainer }
