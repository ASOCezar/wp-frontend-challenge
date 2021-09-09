import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: center;
    text-align: center;

    padding-block: 68px;
  `}
`;
