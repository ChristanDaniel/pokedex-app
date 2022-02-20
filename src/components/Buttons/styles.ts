import styled from 'styled-components'

const ButtonsTypes = styled.nav`
  display: flex;

  @media screen and (max-width: 810px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  button {
    text-transform: capitalize;
    align-self: center;
    font-size: 14px;
    height: 30px;

    background: #e2e2e2;
    color: #737380;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
    border-radius: 10px;

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
