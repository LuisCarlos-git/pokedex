import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      font-family: ${theme.font.family};
      -webkit-font-smoothing: antialiased !important;
    }

    input,
    button {
      font-family: ${theme.font.family};
    }

    #root,
    body {
      height: 100vh;
      background: ${theme.colors['primary-color']};
    }
  `}
`;
