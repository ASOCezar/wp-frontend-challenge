import styled, { css } from 'styled-components';

import background from '../../assets/footer-images/footerBg.png';

export const Container = styled.div`
  ${({ theme }) => css`
    background-image: url(${background});
  `}
`;
