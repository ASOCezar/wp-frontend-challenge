import styled, { css } from 'styled-components';

const LinkedinLogoDarkBg = () => (
  <SVG xmlns="http://www.w3.org/2000/svg" width="37.707" height="37.707" viewBox="0 0 37.707 37.707">
    <g id="linkedin" transform="translate(-1816.377 -45.325)">
      <g id="Grupo_46" data-name="Grupo 46">
        <g id="Grupo_44" data-name="Grupo 44">
          <path
            id="Caminho_957"
            data-name="Caminho 957"
            d="M1829.062,53.973a2.81,2.81,0,0,1,1.915,1.618,2.506,2.506,0,0,1-1.425,3.284,2.311,2.311,0,0,1-2.991-1.5,2.558,2.558,0,0,1,1.535-3.253l.467-.153Z"
            fill="#FFFFFF"
          ></path>
          <path
            id="Caminho_958"
            data-name="Caminho 958"
            d="M1832.615,60.511h3.773l.116.565c.106-.031.2-.053.3-.087a5.207,5.207,0,0,1,7.154,4,4.441,4.441,0,0,1,.081.869q.01,4.035.005,8.07c0,.141-.019.282-.031.451h-3.758v-.7q0-3.66,0-7.319a1.661,1.661,0,0,0-2.406-1.721,6.633,6.633,0,0,0-.883.453.948.948,0,0,0-.523.963c.023,2.523.011,5.046.011,7.569v.733h-3.835Z"
            fill="#FFFFFF"
          ></path>
          <path
            id="Caminho_959"
            data-name="Caminho 959"
            d="M1830.645,74.384h-3.776V60.535h3.776Z"
            fill="#FFFFFF"
          ></path>
        </g>
        <g id="Grupo_45" data-name="Grupo 45">
          <path
            id="Caminho_960"
            data-name="Caminho 960"
            d="M1835.231,83.032a18.853,18.853,0,1,1,18.853-18.854A18.876,18.876,0,0,1,1835.231,83.032Zm0-36.318a17.464,17.464,0,1,0,17.464,17.464A17.484,17.484,0,0,0,1835.231,46.714Z"
            fill="#FFFFFF"
          ></path>
        </g>
      </g>
    </g>
  </SVG>
);

const SVG = styled.svg`
  ${({ theme }) => css`
    #Caminho_957,
    #Caminho_958,
    #Caminho_959,
    #Caminho_960 {
      transition: fill 0.2s linear;
    }
    :hover {
      #Caminho_957,
      #Caminho_958,
      #Caminho_959,
      #Caminho_960 {
        fill: ${theme.colors.darkPink};
      }
    }
  `}
`;

export default LinkedinLogoDarkBg;
