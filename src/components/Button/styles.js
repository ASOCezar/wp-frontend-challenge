import styled, { css } from 'styled-components';

export const Container = styled.svg`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    .b {
      clip-path: url(#a);
    }
    .c {
      fill: #eb3768;
    }
    .d,
    .e {
      fill: #fff;
      font-family: DarkerGrotesque-Black, Darker Grotesque;
      font-weight: 800;
    }
    .d {
      font-size: 30px;
      letter-spacing: 0.006em;
      inset-inline: 200px;
    }
    .e {
      font-size: 30px;
      letter-spacing: 0.035em;
      opacity: 0;
    }

    :hover {
      .c {
        fill: ${theme.colors.marineBlue};
      }
      .d {
        opacity: 0;
      }
      .e {
        opacity: 1;
      }
    }
  `}
`;
