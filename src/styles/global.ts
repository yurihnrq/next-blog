import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
  }
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
