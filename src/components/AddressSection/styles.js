import styled, { css } from 'styled-components';

import background from '../../assets/footer-images/footerBg.png';

export const Container = styled.div`
  ${({ theme }) => css`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-inline: 49px;
    padding-block: 30px;
    width: 100%;
    height: 312px;
    margin-top: 270px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    .addres-info {
      max-width: 280px;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.weight.black};
      line-height: 34px;
      letter-spacing: -0.9px;
      text-align: center;
    }
  `}
`;
