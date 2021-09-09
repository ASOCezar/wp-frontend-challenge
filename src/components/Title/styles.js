import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding-inline: 40px;
    .description {
      text-align: center;
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weight.semibold};
      color: ${theme.colors.marineBlue};
      line-height: 25.6px;
      max-width: 868.92px;
    }

    @media ${theme.media.desktop} {
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
