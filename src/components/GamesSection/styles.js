import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 68px;

    .btn-learnMore {
      border: none;
      background-color: transparent;
      padding: 0;
      margin-top: 72.82px;
      width: 159px;
      height: 46px;
      outline: none;
      user-select: none;
    }

    @media ${theme.media.desktop} {
      height: 100vh;
      max-height: 1080px;
      margin-bottom: 0;
      .title {
        h2 {
          font-size: ${theme.font.sizes.big};
          letter-spacing: -2.05px;
          line-height: 86.56px;
        }
      }

      .description {
        line-height: 33.6px;
        font-size: ${theme.font.sizes.large};
      }

      .btn-learnMore {
        margin-top: 45px;
        width: 275px;
        height: 80px;
      }
    }
  `}
`;
