import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  height: 140px;

  padding-left: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #616480;
    margin-bottom: 12px;
    font-size: smaller;
  }

  a {
    display: flex;
    align-items: center;
    color: #616480;
    margin-bottom: 4px;
    cursor: pointer;
  }

  span {
    font-size: 15px;
    margin: 2px;
  }

  #divContent {
    display: flex;
    justify-content: center;

    svg {
      margin-right: 5px;
    }
  }
`

export { FooterContainer }
