import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(297.74px, 297.74px));
    grid-auto-rows: 353.8px;
    gap: 23.09px;
    align-content: center;
    align-items: center;
    justify-items: center;
    justify-content: center;
    padding-inline: calc(2vw + 2.8px);

    @media ${theme.media.desktop} {
      grid-template-columns: repeat(auto-fill, minmax(calc(26vw + 16px), calc(26vw + 16px)));
      grid-auto-rows: calc(26vw + 100px);
      padding-inline: 100px;
      gap: 37px;
    }
  `}
`;
