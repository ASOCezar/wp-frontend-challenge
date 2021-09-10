import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: calc(8% + 1.22px);
    width: 100%;

    .social-a {
      background-color: transparent;
      border: none;
      width: 34.46px;
      height: 34.46px;
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
