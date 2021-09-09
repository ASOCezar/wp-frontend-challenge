import styled, { css } from 'styled-components';

const YtbLogoLightBg = () => (
  <SVG xmlns="http://www.w3.org/2000/svg" width="37.707" height="37.707" viewBox="0 0 37.707 37.707">
    <g id="youtube" transform="translate(-1764.731 -45.325)">
      <g id="Grupo_56" data-name="Grupo 56">
        <path
          id="Caminho_967"
          data-name="Caminho 967"
          d="M1770.921,62.389a23.9,23.9,0,0,1,.264-2.548,19.2,19.2,0,0,1,.83-2.816,2.244,2.244,0,0,1,2.267-1.48c4.745-.064,9.49-.136,14.236-.165,1.451-.009,2.9.133,4.356.166a2.338,2.338,0,0,1,2.308,1.535,12.282,12.282,0,0,1,.806,3.023,29.617,29.617,0,0,1-.294,9.737,6.194,6.194,0,0,1-.631,1.6,2.367,2.367,0,0,1-2.09,1.258,169.267,169.267,0,0,1-18.589.037,2.539,2.539,0,0,1-2.519-1.728,31.277,31.277,0,0,1-.813-3.621c-.061-.288-.088-.584-.131-.876Zm10.153,6.364,7.182-4.61-7.182-4.637Z"
          fill="#1A2C3A"
        ></path>
        <g id="Grupo_55" data-name="Grupo 55">
          <path
            id="Caminho_968"
            data-name="Caminho 968"
            d="M1783.585,83.032a18.853,18.853,0,1,1,18.853-18.854A18.876,18.876,0,0,1,1783.585,83.032Zm0-36.318a17.464,17.464,0,1,0,17.465,17.464A17.484,17.484,0,0,0,1783.585,46.714Z"
            fill="#1A2C3A"
          ></path>
        </g>
      </g>
    </g>
  </SVG>
);

const SVG = styled.svg`
  ${({ theme }) => css`
    #Caminho_967,
    #Caminho_968 {
      transition: fill 0.2s linear;
    }
    :hover {
      #Caminho_967,
      #Caminho_968 {
        fill: ${theme.colors.darkPink};
      }
    }
  `}
`;

export default YtbLogoLightBg;
