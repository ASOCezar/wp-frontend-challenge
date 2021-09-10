import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;

    @media ${theme.media.desktop} {
      flex-direction: row-reverse;
      position: relative;
    }
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.marineBlue};
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    padding-block: 24px;
    gap: 41.03px;
    width: 100%;

    .first-column {
      display: flex;
      flex-direction: column;
      gap: 37.71px;
      align-items: center;

      .footer-logo {
        width: calc(40vw + 15.56px);
        height: calc(40vw + 5.22px);
        max-width: 165.56px;
        max-height: 250px;
      }
    }

    .second-column {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 37.04px;
    }

    @media ${theme.media.desktop} {
      width: calc(55vw + 14px);
      height: calc(24vw + 12px);
      gap: calc(5vw + 4px);
      flex-direction: row;
      margin-top: calc(19vw + 16px);
      padding: calc(3vw + 11px) calc(8vw + 7.52px) calc(5vw + 8.43px) calc(11vw + 4px);

      .first-column {
        height: auto;
        width: auto;
        align-items: flex-start;
        justify-content: center;

        .footer-logo {
          width: calc(11vw + 24px);
          height: auto;
          max-width: 100%;
          max-height: 100%;
        }
      }

      .second-column {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        height: 100%;
        gap: 50px;
      }
    }
  `};
`;

export const CopyrightText = styled.div`
  ${({ theme }) => css`
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-inline: 38.81px;

    small {
      font-family: 'MYRIADPRO-REGULAR', sans-serif;
      color: ${theme.colors.white};
      font-weight: ${theme.font.weight.regular};
      font-size: ${theme.font.sizes.small};
      line-height: 15.6px;
      letter-spacing: 0;
    }

    @media ${theme.media.desktop} {
      text-align: left;
      padding-inline: 0;
      grid-column: 1 / 3;

      small {
        font-size: ${theme.font.sizes.xsmall};
      }
    }
  `};
`;

export const LegalLinks = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;

    .legal-link {
      text-decoration: none;
      color: ${theme.colors.white};
      font-weight: ${theme.font.weight.regular};
      font-size: ${theme.font.sizes.xlarge};
      line-height: 44px;
    }

    @media ${theme.media.desktop} {
      height: 100%;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 19px;

      .legal-link {
        line-height: 100%;
        transition: color 0.2s linear;
        :hover {
          color: ${theme.colors.darkPink};
        }
      }
    }
  `};
`;
