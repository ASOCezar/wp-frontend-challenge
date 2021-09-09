import styled, { css } from 'styled-components';

const direction = (horizontal) =>
  horizontal
    ? css`
        flex-direction: row;
        justify-content: flex-start;
        gap: 20px;
        padding: 0;
      `
    : css`
        flex-direction: column;
        justify-content: center;
        gap: 25px;
      `;

const changeColor = (dark, theme) =>
  dark
    ? css`
        color: ${theme.colors.marineBlue};
      `
    : css`
        color: ${theme.colors.white};
      `;

export const Container = styled.nav`
  ${({ theme, dark, horizontal }) => css`
    display: flex;
    ${direction(horizontal)}
    width: 100%;
    align-items: center;

    a {
      text-decoration: none;
      ${changeColor(dark, theme)}
      font-weight: ${theme.font.weight.black};
      font-size: ${theme.font.sizes.xlarge};
    }

    @media ${theme.media.desktop} {
      height: 100%;
      padding-top: ${horizontal ? 0 : '50px'};
      justify-content: flex-start;
      align-items: ${horizontal ? 'center' : 'flex-start'};

      a {
        position: relative;
        ::after {
          content: '';
          position: absolute;
          bottom: -10px;
          border-radius: 6px;
          width: 0;
          height: 5px;
          background: ${theme.colors.darkPink};
          left: 0;
          transition: all 0.2s ease-in-out;
        }

        :hover::after {
          width: 55%;
          left: 0;
        }
      }
    }
  `}
`;
