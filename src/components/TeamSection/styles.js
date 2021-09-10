import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #f2f2f2;
    margin: 0 auto;
    gap: 15px;

    width: 100%;
    max-height: 686px;

    @media ${theme.media.desktop} {
      width: calc(84vw + 5.86px)
      height: auto;
      max-width: 1617px;
      max-height: 945px;
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
      justify-content: space-between;
      z-index: 2;
      object-fit: cover;

      #chris {
        width: 49vw;
        height: 50vw;
      }

      #josh {
        width: 36vw;
        height: 50vw;
      }
    }

    .team-group {
      position: absolute;
      top: 90px;

      .team-bg {
        object-fit: cover;
        height: calc(80vw + 20px);
        width: calc(80vw + 38px);
        position: relative;
      }
      .team-img {
        height: calc(80vw + 3px);
        width: calc(80vw + 20px);
        position: absolute;
        top: 10px;
        left: 15px;
        z-index: 3;
      }

      .btn-learnMore {
        position: absolute;
        bottom: -19px;
        left: 25vw;
        z-index: 4;
      }
    }

    @media ${theme.media.desktop} {
      .team-creators {
        z-index: 1;
        #chris {
          max-width: 620.38px;
          max-height: 633.77px;
          width: calc(32vw + 6px);
          height: calc(33vw);
        }

        #josh {
          max-width: 454.35px;
          max-height: 636.09px;
          width: calc(23vw + 13px);
          height: calc(33vw);
        }
      }

      .team-group {
        height: auto;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;

        .team-bg {
          height: calc(45vw + 2px);
          width: calc(47vw + 15px);
          position: relative;
          z-index: 0;
        }

        .team-img {
          height: calc(45vw + 4px);
          width: calc(47vw + 17px);
          position: absolute;
          top: 10px;
          left: 5px;
          z-index: 1;
        }

        .btn-learnMore {
          position: relative;
          top: -90px;
          left: 0;
          z-index: 4;
        }
      }
    }
  `};
`;
