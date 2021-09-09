import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    overflow: hidden;

    height: calc(100% - 113px);

    @media ${theme.media.desktop} {
      padding: 0;
    }
  `}
`;
