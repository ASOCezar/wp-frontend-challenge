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

    .description {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weight.semibold};
      color: ${theme.colors.marineBlue};
      line-height: 25.6px;
      max-width: 868.92px;
    }

    @media ${theme.media.desktop} {
      height: 100vh;
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
    }
  `}
`;
