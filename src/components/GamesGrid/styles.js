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
    justify-items: center;
  `}
`;
