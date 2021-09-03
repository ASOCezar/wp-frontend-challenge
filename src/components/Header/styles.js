import styled, { css, keyframes } from 'styled-components';

const openMenu = keyframes`
  from {left: -400px};
  to {left: 0};
`;

const closeMenu = keyframes`
  from {left: 0};
  to {left: -400px};
`;

export const Container = styled.header`
  ${({ theme, menuOpen }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 113px;
    padding-inline: 40px;
    background-color: none;
    background-image: linear-gradient(${theme.colors.white}, ${theme.colors.secondaryWhite});
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: 9.5px solid ${theme.colors.pink};

    .logo {
      width: 155px;
      height: 45px;
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
      inset: 0;
      height: 100vh;
      width: 80%;
      animation: ${({ menuOpen }) => (menuOpen ? openMenu : closeMenu)} 300ms linear forwards;
      gap: 15px;
      padding-block: 20px;

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
  `}
`;
