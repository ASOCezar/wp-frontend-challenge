import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;

    .social-a {
      background-color: transparent;
      border: none;
      width: 35px;
      height: 35px;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
      }
    }

    @media ${theme.media.desktop} {
      width: auto;
      gap: 15px;
    }
  `}
`;
