import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #f2f2f2;
    margin: 0 auto;

    width: 100%;
    max-height: 686px;

    .btn-learnMore {
      position: absolute;
      top: 302.18px;
    }

    @media ${theme.media.desktop} {
      max-width: 1617px;
      max-height: 1080px;

      .btn-learnMore {
        top: 690px;
        z-index: 4;
      }
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .team-creators {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-evenly;
    }

    .team-group {
      position: absolute;
      top: 90px;
    }

    @media ${theme.media.desktop} {
      .team-creators {
        img {
          object-fit: cover;
          height: 100%;
        }
      }

      .team-group {
        object-fit: cover;
        height: 100%;
        max-height: 868px;
        top: 150px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  `};
`;
