import styled, { css } from 'styled-components';

const InstagramLogoDarkBg = () => (
  <SVG xmlns="http://www.w3.org/2000/svg" width="37.707" height="37.707" viewBox="0 0 37.707 37.707">
    <g id="instagram" transform="translate(-1713.085 -45.325)">
      <g id="Grupo_53" data-name="Grupo 53">
        <g id="Grupo_51" data-name="Grupo 51">
          <path
            id="Caminho_963"
            data-name="Caminho 963"
            d="M1721.336,64.1c0-1.93-.011-3.861,0-5.791a4.866,4.866,0,0,1,5.2-5.163q5.415-.006,10.831,0a4.877,4.877,0,0,1,5.151,5.066q.057,5.948,0,11.9a4.9,4.9,0,0,1-5.134,5.1q-5.454.018-10.908,0a4.887,4.887,0,0,1-5.139-5.162C1721.323,68.064,1721.336,66.081,1721.336,64.1Zm2.1.028c0,1.956-.008,3.912,0,5.868A2.767,2.767,0,0,0,1726.389,73q5.531.021,11.061,0a2.755,2.755,0,0,0,2.948-3q.014-5.829,0-11.658a2.75,2.75,0,0,0-3.022-2.989q-5.453,0-10.905,0a2.77,2.77,0,0,0-3.031,3.063C1723.435,60.319,1723.439,62.223,1723.439,64.126Z"
            fill="#FFFFFF"
          ></path>
          <path
            id="Caminho_964"
            data-name="Caminho 964"
            d="M1731.9,69.934a5.711,5.711,0,1,1,5.513-5.713A5.605,5.605,0,0,1,1731.9,69.934Zm3.381-5.695a3.36,3.36,0,1,0-3.362,3.489A3.445,3.445,0,0,0,1735.276,64.239Z"
            fill="#FFFFFF"
          ></path>
          <path
            id="Caminho_965"
            data-name="Caminho 965"
            d="M1737.656,57.122a1.451,1.451,0,0,1,1.34,1.527,1.434,1.434,0,0,1-1.479,1.382,1.459,1.459,0,0,1,.139-2.909Z"
            fill="#FFFFFF"
          ></path>
        </g>
        <g id="Grupo_52" data-name="Grupo 52">
          <path
            id="Caminho_966"
            data-name="Caminho 966"
            d="M1731.939,83.032a18.853,18.853,0,1,1,18.853-18.854A18.876,18.876,0,0,1,1731.939,83.032Zm0-36.318A17.464,17.464,0,1,0,1749.4,64.178,17.484,17.484,0,0,0,1731.939,46.714Z"
            fill="#FFFFFF"
          ></path>
        </g>
      </g>
    </g>
  </SVG>
);

const SVG = styled.svg`
  ${({ theme }) => css`
    #Caminho_963,
    #Caminho_964,
    #Caminho_965,
    #Caminho_966 {
      transition: fill 0.2s linear;
    }
    :hover {
      #Caminho_963,
      #Caminho_964,
      #Caminho_965,
      #Caminho_966 {
        fill: ${theme.colors.darkPink};
      }
    }
  `}
`;

export default InstagramLogoDarkBg;
