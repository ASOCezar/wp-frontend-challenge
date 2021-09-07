import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 113px;

    @media ${theme.media.desktop} {
      width: 100%;
      height: 100%;
      margin: 0;
    }
  `}
`;
