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
    /* max-height: 686px; */

    .team-images {
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
        top: 100px;
      }
    }

    .btn-learnMore {
      border: none;
      background-color: transparent;
      padding: 0;
      margin-top: 10px;
      width: 159px;
      height: 46px;
      outline: none;
      user-select: none;
      position: absolute;
      top: 375px;
    }

    @media ${theme.media.desktop} {
      max-width: 1617px;

      .team-images {
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

      .btn-learnMore {
        margin-top: 45px;
        width: 275px;
        height: 80px;
        top: 690px;
        z-index: 4;
      }
    }
  `}
`;
