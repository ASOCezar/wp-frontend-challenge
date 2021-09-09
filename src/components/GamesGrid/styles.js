import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(297.74px, 1fr));
    grid-auto-rows: 353.8px;
    gap: 23px;
    align-content: center;
    align-items: center;
    justify-items: center;
    justify-content: center;

    @media ${theme.media.desktop} {
      grid-template-columns: repeat(auto-fill, minmax(490.92px, 515px));
      grid-auto-rows: 612.17px;
      padding-inline: 100px;
      gap: 37px;
    }
  `}
`;
