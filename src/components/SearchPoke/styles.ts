import styled from 'styled-components'

const NavSection = styled.nav`
  background-color: #e2e2e2;
  padding-top: 10px;
  width: auto;
  /* flex-direction: column; */
  padding-left: 50px;
  display: flex;
  align-items: center;

  div {
    display: flex;
  }

  /* img {
    display: flex;
  } */

  input {
    margin-left: 40px;
    padding-left: 20px;
    height: 35px;
    width: 280px;
    border-radius: 15px;
    border: none;
  }

  button {
    text-transform: capitalize;
    /* text-decoration: none; */
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

    cursor: pointer;
    border: 0;

    transition: 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }
`

export { NavSection }
