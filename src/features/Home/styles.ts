import styled from 'styled-components'

const MainContainer = styled.main`
  width: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 60px;
  gap: 30px;
`
const LiContent = styled.li`
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.backgroundType};
  box-shadow: rgb(0 0 0 / 30%);
  max-height: 180px;
  max-width: 400px;
  justify-content: center;

  :hover {
    filter: brightness(0.9);
  }
  transition: 0.2s;

  a {
    display: flex;

    img {
      padding-left: 20px;
      height: 105px;
    }
  }
`

const DivContent = styled.div`
  margin-top: 25px;
  margin-left: 26px;

  span {
    font-size: 22px;
    color: #ffffff;
  }

  h2 {
    font-weight: bold;
    font-size: 30px;
    /* line-height: 65px; */
    text-transform: capitalize;
    color: #ffffff;
  }

  div {
    display: flex;

    p {
      font-size: 15px;
      /* line-height: 65px; */
      text-transform: capitalize;
      margin-top: 8px;
      padding-right: 15px;
    }
  }
`

export { MainContainer, LiContent, DivContent }
