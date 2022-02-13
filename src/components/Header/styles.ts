import styled from 'styled-components'

const Headers = styled.header`
  background-color: #e2e2e2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: auto;

  @media screen and (max-width: 880px) {
    display: block;
  }

  div {
    display: flex;
  }

  h3 {
    display: flex;
    margin-left: 22px;
    padding-left: 10px;
    border-left: 1px solid #616480;
    padding-left: 20px;
    color: #616480;
  }
`

export { Headers }
