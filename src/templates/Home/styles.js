import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    overflow: hidden;

    /* padding-inline: 40px; */
    height: calc(100% - 113px);

    @media ${theme.media.desktop} {
      padding: 0;
    }
  `}
`;
