import styled, { css } from 'styled-components';

import background from '../../assets/footer-images/footerBg.png';
import background2x from '../../assets/footer-images/footerBg_2x.png';

export const Container = styled.div`
  ${({ theme }) => css`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-block: 38.85px;
    width: 100%;
    max-height: 312px;
    height: calc(80vw + 12px);
    margin-top: 74vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .addres-info {
      max-width: 280px;
      color: ${theme.colors.white};
      font-size: clamp(34px, 9vw + 2.25px, 36px);
      font-weight: ${theme.font.weight.black};
      line-height: 95%;
      letter-spacing: -0.9px;
      text-align: center;
    }

    @media ${theme.media.desktop} {
      background-image: url(${background2x});
      width: calc(44vw + 5px);
      height: calc(24vw + 12px);
      max-height: 100%;
      margin-top: calc(19vw + 14px);
      padding-block: calc(3vw + 11px);
    }
  `}
`;
