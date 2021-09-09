import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    border: none;
    background-color: transparent;
    padding: 0;
    margin-top: 72.82px;
    width: 159px;
    height: 46px;
    outline: none;
    user-select: none;

    svg {
      width: 100%;
      height: 100%;
      .a {
        transition: transform 0.4s ease-in-out;
        fill: ${theme.colors.marineBlue};
      }
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
        font-size: ${theme.font.sizes.xlarge};
      }
      .d {
        letter-spacing: 0.006em;
        inset-inline: 200px;
        transition: all 0.3s ease-in-out;
      }
      .e {
        letter-spacing: 0.035em;
        opacity: 0;
        transition: all 0.3s ease-in-out;
      }

      :hover {
        .a {
          transform: translate(-748.1px, -4777.555px);
        }
        .d {
          opacity: 0;
        }
        .e {
          opacity: 1;
        }
      }
    }

    @media ${theme.media.desktop} {
      margin-top: 45px;
      width: 275px;
      height: 80px;
    }
  `}
`;
