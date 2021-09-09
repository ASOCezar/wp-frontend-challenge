import styled, { css } from 'styled-components';

const FacebookLogoDarkBg = () => (
  <SVG xmlns="http://www.w3.org/2000/svg" width="37.707" height="37.707" viewBox="0 0 37.707 37.707">
    <g id="facebook" transform="translate(-1609.794 -45.325)">
      <g id="Grupo_42" data-name="Grupo 42">
        <path
          id="Caminho_955"
          data-name="Caminho 955"
          d="M1630.6,60.351h4.455v4.738h-4.523V76.538h-4.577V65.148h-3.722v-4.77h3.678c0-.9-.012-1.669,0-2.443a5.856,5.856,0,0,1,6.159-6.116h2.984v4.649c-1.016,0-2.041,0-3.066,0-1,0-1.361.31-1.441,1.3-.053.661-.028,1.328-.027,1.992A5.022,5.022,0,0,0,1630.6,60.351Z"
          fill="#FFFFFF"
        ></path>
        <g id="Grupo_41" data-name="Grupo 41">
          <path
            id="Caminho_956"
            data-name="Caminho 956"
            d="M1628.647,83.032A18.853,18.853,0,1,1,1647.5,64.178,18.875,18.875,0,0,1,1628.647,83.032Zm0-36.318a17.464,17.464,0,1,0,17.465,17.464A17.484,17.484,0,0,0,1628.647,46.714Z"
            fill="#FFFFFF"
          ></path>
        </g>
      </g>
    </g>
  </SVG>
);

const SVG = styled.svg`
  ${({ theme }) => css`
    #Caminho_955,
    #Caminho_956 {
      transition: fill 0.2s linear;
    }
    :hover {
      #Caminho_955,
      #Caminho_956 {
        fill: ${theme.colors.darkPink};
      }
    }
  `}
`;

export default FacebookLogoDarkBg;
