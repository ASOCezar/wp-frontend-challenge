import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #f2f2f2;

    width: 100%;
    height: 100vh;
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
      max-height: 1080px;

      .btn-learnMore {
        margin-top: 45px;
        width: 275px;
        height: 80px;
      }
    }
  `}
`;
