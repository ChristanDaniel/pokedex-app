import styled from 'styled-components'

const NavSection = styled.nav`
  background-color: #e2e2e2;
  padding-top: 10px;

  padding-left: 50px;
  display: flex;

  @media screen and (max-width: 1200px) {
    display: block;
  }

  input {
    margin-left: 12px;
    padding-left: 20px;
    height: 35px;
    width: 280px;
    border-radius: 15px;
    border: none;
  }
`

export { NavSection }
