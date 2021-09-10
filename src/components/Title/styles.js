import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding-inline: 38.25px;
    .description {
      text-align: center;
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weight.semibold};
      color: ${theme.colors.marineBlue};
      line-height: 25.6px;

      strong {
        font-weight: ${theme.font.weight.black};
      }
    }

    @media ${theme.media.desktop} {
      .title {
        h2 {
          font-size: clamp(82px, 4vw + 6px, 72px);
          letter-spacing: -2.05px;
          line-height: calc(135% + 0.3px);
        }
      }

      .description {
        width: calc(45vw);
        max-width: 868.92px;
        line-height: 150%;
        font-size: clamp(28px, 2vw + 10px, 18px);
      }
    }
  `}
`;
