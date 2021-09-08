import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Darker Grotesque', sans-serif;
  }

  p {
    font-weight: ${theme.font.weight.semibold};
  }

  h2 {
    font-weight: ${theme.font.weight.black};
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.marineBlue};
    letter-spacing: -0.88px;
    line-height: 87px;
  }

  button {
    cursor: pointer;
  }
`;
