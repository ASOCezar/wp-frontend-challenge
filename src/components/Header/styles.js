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
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 113px;
    padding-inline: 11vw;
    background-image: linear-gradient(${theme.colors.white}, ${theme.colors.secondaryWhite});
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: 9.5px solid ${theme.colors.pink};
    z-index: 999;

    .logo {
      width: 145px;
      height: 35px;
    }

    .open-menu {
      background-color: transparent;
      border: none;
      display: inline-block;
      outline: none;

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
      top: 9.4px;
      height: 100vh;
      width: 77vw;
      animation: ${({ menuOpen }) => (menuOpen ? openMenu : closeMenu)} 300ms linear forwards;
      gap: 44px;
      padding-block: 30px;
      padding-inline: 20.94px;

      .links {
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
        width: fit-content;
        height: fit-content;
        display: flex;
        margin: 0 auto;

        img {
          width: 110px;
          height: calc(51.88 * 2);
          max-height: 180px;
          max-width: 180px;
        }
      }

      .menu-socials {
      }
    }

    @media ${theme.media.desktop} {
      position: absolute;
      height: 160px;
      flex-direction: row;

      padding-inline: 7.5%;
      justify-content: center;
      gap: 5%;

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

        .menu-logo {
          visibility: hidden;
          display: none;
        }
      }
    }
  `}
`;
