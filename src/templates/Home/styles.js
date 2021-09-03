import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    padding-inline: 40px;
    max-width: 100%;
    height: calc(100% - 113px);
    overflow-y: scroll;
  `}
`;
