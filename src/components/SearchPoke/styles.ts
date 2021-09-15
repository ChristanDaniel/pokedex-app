import styled from 'styled-components'

const NavSection = styled.nav`
  background-color: #e2e2e2;
  padding-top: 40px;
  width: auto;
  flex-direction: column;
  padding-left: 240px;

  div {
    display: flex;
    /* padding-top: 14px; */
  }

  /* img {
    display: flex;
  } */

  input {
    padding-left: 20px;
    height: 45px;
    width: 960px;
    border-radius: 100px;
  }

  button {
    align-self: center;
    font-size: 14px;
    height: 30px;

    background: #e2e2e2;
    color: #737380;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
    border-radius: 100px;

    margin-left: 5px;
    text-decoration: none;

    cursor: pointer;
    border: 0;

    transition: 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }
`

export { NavSection }
