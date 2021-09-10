import styled, { css } from 'styled-components';

const direction = (horizontal) =>
  horizontal
    ? css`
        flex-direction: row;
        justify-content: center;
        gap: calc(2vw + 2px);
        padding: 0;

        a {
          white-space: nowrap;
          font-size: clamp(10px, 1vw + 8.8px, 28px);
        }
      `
    : css`
        flex-direction: column;
        justify-content: center;
        gap: 19px;
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
    flex-direction: column;
    justify-content: center;
    gap: calc(15% + 1px);

    width: 100%;
    align-items: center;

    a {
      text-decoration: none;
      ${changeColor(dark, theme)}
      font-weight: ${theme.font.weight.black};
      font-size: ${theme.font.sizes.xlarge};
      line-height: 56px;
    }

    @media ${theme.media.desktop} {
      height: 100%;
      ${direction(horizontal)}

      justify-content: center;
      align-items: ${horizontal ? 'center' : 'flex-start'};

      a {
        position: relative;
        line-height: 100%;
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
