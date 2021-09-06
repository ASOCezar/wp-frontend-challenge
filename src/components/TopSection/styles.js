import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;

    .title {
      width: 294.493px;
      height: 149.224px;

      font-size: ${theme.font.sizes.big};
      font-weight: ${theme.font.weight.extrabold};
      color: ${theme.colors.marineBlue};
      text-shadow: 1px 3px 1px #df8080;
      letter-spacing: -1px;
      line-height: 40px;

      .title-text {
        max-width: 100%;
        max-height: 100%;
      }

      .horizontal-line {
        margin-top: 15px;
        width: 85px;
        height: 10px;
        border-radius: 4px;

        background-color: #df8080;
      }
    }

    .description {
      text-align: left;
      color: ${theme.colors.marineBlue};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weight.semibold};
    }

    .btn-learnMore {
      border: none;
      background-color: transparent;
      padding: 0;
      margin: 0;
    }

    .main-image {
      width: calc(100% + 40px);
      height: auto;
      display: flex;
      flex-direction: row;

      align-items: flex-end;
      justify-content: flex-end;

      @media ${theme.media.tablet} {
        img {
          width: 55%;
        }
      }
    }
  `}
`;
