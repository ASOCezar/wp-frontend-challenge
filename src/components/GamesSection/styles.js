import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 13.98px;
    align-items: center;
    justify-content: center;
    text-align: center;

    padding-block: 34.35px;

    .btn-seeMore {
      margin-top: calc(15vw + 3px);
    }

    @media ${theme.media.desktop} {
      gap: 36.37px;
      .btn-seeMore {
        margin-top: calc(3vw + 15px);
      }
    }
  `}
`;
