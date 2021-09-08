import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, background }) => css`
    width: 100%;
    max-width: 297.74px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 19.16px;
    box-shadow: 12.07px 12.07px 30px rgba(25, 25, 25, 0.15);
    background-color: ${theme.colors.white};
    border: 0.75px #eff0f0;
    cursor: pointer;

    .card-img {
      background-image: url(${background});
      border-radius: 19.16px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      min-height: 297.95px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .character {
        object-fit: contain;
        width: 100%;
        height: 100%;
        transition: all 320ms linear;

        &:hover {
          transform: scale(1.05) translate(-2%, -2%);
        }
      }
    }

    .card-text {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .game-title {
        color: ${theme.colors.marineBlue};
        font-size: ${theme.font.sizes.large};
        font-weight: ${theme.font.weight.black};
        letter-spacing: -0.5px;
      }

      a {
        text-decoration: none;
        color: ${theme.colors.darkPink};
        font-size: ${theme.font.sizes.xsmall};
        font-weight: ${theme.font.weight.black};
      }
    }

    @media ${theme.media.desktop} {
      max-width: 100%;

      .card-img {
        align-items: flex-end;
        .character {
        }
      }

      .card-text {
        height: 150px;
      }
    }
  `}
`;
