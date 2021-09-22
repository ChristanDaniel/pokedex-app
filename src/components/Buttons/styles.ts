import styled from 'styled-components'

const ButtonsTypes = styled.nav`
  display: flex;
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

export { ButtonsTypes }
