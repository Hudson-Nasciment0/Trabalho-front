import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    display: flex;
    justify-content: center;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  input {
    border-radius: 4px;
    outline: none;
  }
`;