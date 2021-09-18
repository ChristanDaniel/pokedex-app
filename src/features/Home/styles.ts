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

    transition: 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }
`
const Content = styled.main`
  width: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 45px;
  gap: 30px;
`

const LiContent = styled.li`
  border-radius: 10px;
  background: #61cec0;
  /* background: ${(props) => props.color}; */
  /* box-shadow: rgb(0 0 0 / 30%); */
  box-shadow: rgb(0 0 0 / 30%) 1px 3px 12px 0px;
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

export { MainContainer, LiContent, DivContent, Content }
