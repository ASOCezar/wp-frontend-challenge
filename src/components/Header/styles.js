import styled, { css, keyframes } from 'styled-components';

const openMenu = keyframes`
  from {left: -100vw};
  to {left: 0};
`;

const closeMenu = keyframes`
  from {left: 0};
  to {left: -100vw};
`;

export const Container = styled.header`
  ${({ theme, menuOpen }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 113px;
    padding-inline: 40px;
    background-image: linear-gradient(${theme.colors.white}, ${theme.colors.secondaryWhite});
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: 9.5px solid ${theme.colors.pink};

    .logo {
      width: 145px;
      height: 35px;
    }

    .open-menu {
      background-color: transparent;
      border: none;
      display: inline-block;
      outline: none;
      z-index: 4;

      .bar1,
      .bar2,
      .bar3 {
        width: 36.76px;
        height: 4.11px;
        margin: 4px 0;
        background-color: ${theme.colors.marineBlue};
        border-radius: 3px;
        transition: 0.4s;
      }

      .bar1.change {
        background-color: ${theme.colors.pink};
        -webkit-transform: rotate(-45deg) translate(-7px, 4px);
        transform: rotate(-45deg) translate(-7px, 4px);
      }

      .bar2.change {
        opacity: 0;
      }

      .bar3.change {
        background-color: ${theme.colors.pink};
        -webkit-transform: rotate(45deg) translate(-6px, -6px);
        transform: rotate(45deg) translate(-6px, -6px);
      }
    }

    .menu-wrapper {
      display: flex;
      flex-direction: column;
      position: fixed;
      background-color: ${theme.colors.marineBlue};
      inset: 0;
      height: 100vh;
      width: 75%;
      animation: ${({ menuOpen }) => (menuOpen ? openMenu : closeMenu)} 300ms linear forwards;
      gap: 15px;
      padding-block: 20px;
      z-index: 400;

      nav {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding-top: 40px;

        .menu-link {
          text-decoration: none;
          color: ${theme.colors.white};
          font-weight: ${theme.font.weight.black};
          font-size: ${theme.font.sizes.xlarge};
        }
      }

      .menu-logo {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 120px;
          height: 120px;
        }
      }

      .menu-socials {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
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
    }

    @media ${theme.media.desktop} {
      position: absolute;
      flex-direction: row;
      padding-inline: 140px;
      justify-content: center;
      gap: 5%;
      z-index: 3;

      .open-menu {
        display: none;
        visibility: hidden;
      }

      .menu-wrapper {
        flex-direction: row;
        position: unset;
        background-color: transparent;
        height: 100%;
        width: 100%;
        padding-block: 0px;

        nav {
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          gap: 20px;
          padding: 0;

          .menu-link {
            color: ${theme.colors.marineBlue};
            flex-wrap: nowrap;
            font-size: ${theme.font.sizes.xlarge};
          }
        }

        .menu-logo {
          visibility: hidden;
          display: none;
        }

        .menu-socials {
          width: auto;
          gap: 15px;
        }
      }
    }
  `}
`;
