import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;

    .footer-content {
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
        .social-wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 30px;
          width: 100%;

          .social-button {
            background-color: transparent;
            border: none;
            width: 35px;
            height: 35px;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }

        .footer-logo {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      nav {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;

        .menu-link {
          text-decoration: none;
          color: ${theme.colors.white};
          font-weight: ${theme.font.weight.black};
          font-size: ${theme.font.sizes.xlarge};
        }
      }

      .legal-infos {
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
      }

      .copyrights {
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
      }
    }

    @media ${theme.media.desktop} {
      flex-direction: row-reverse;
      position: relative;

      .footer-content {
        height: 466px;
        flex-direction: row;

        .first-column {
          height: 100%;
          align-items: center;
          justify-content: center;
        }

        .second-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
        }

        nav,
        .legal-infos {
          height: 100%;
          padding-top: 50px;
          justify-content: flex-start;
          align-items: flex-start;
        }

        .copyrights {
          grid-column: 1 / 3;
        }
      }
    }
  `}
`;
