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
    padding: 24px;
    gap: 31px;
    width: 100%;

    .first-column {
      display: flex;
      flex-direction: column;
      gap: 50px;

      .footer-logo {
        width: 100%;
        max-height: 250px;
      }
    }

    @media ${theme.media.desktop} {
      height: 466px;
      flex-direction: row;

      .first-column {
        height: 100%;
        max-width: 500px;
        align-items: center;
        justify-content: center;
      }

      .second-column {
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-width: 500px;
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

    small {
      font-family: 'MYRIADPRO-REGULAR', sans-serif;
      color: ${theme.colors.white};
      font-weight: ${theme.font.weight.regular};
      font-size: ${theme.font.sizes.small};
    }

    @media ${theme.media.desktop} {
      grid-column: 1 / 3;
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
    }

    @media ${theme.media.desktop} {
      height: 100%;
      padding-top: 50px;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 25px;

      .legal-link {
        transition: color 0.2s linear;
        :hover {
          color: ${theme.colors.darkPink};
        }
      }
    }
  `};
`;
