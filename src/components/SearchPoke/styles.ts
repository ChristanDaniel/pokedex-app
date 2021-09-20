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
    /* margin-right: 25px; */
    /* padding-top: 14px; */
  }

  /* img {
    display: flex;
  } */

  input {
    padding-left: 20px;
    height: 35px;
    width: 250px;
    border-radius: 15px;
    border: none;
  }

  button {
    /* display: flex; */
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
