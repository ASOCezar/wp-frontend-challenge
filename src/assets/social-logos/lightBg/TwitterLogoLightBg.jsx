import styled, { css } from 'styled-components';

const TwitterLogoLightBg = () => (
  <SVG xmlns="http://www.w3.org/2000/svg" width="37.708" height="37.707" viewBox="0 0 37.708 37.707">
    <g id="twitter" transform="translate(-1661.439 -45.325)">
      <g id="Grupo_49" data-name="Grupo 49">
        <path
          id="Caminho_961"
          data-name="Caminho 961"
          d="M1692.6,57.11a17.811,17.811,0,0,1-1.522,1.628,1.94,1.94,0,0,0-.694,1.558c-.268,5.107-2.381,9.232-6.865,11.789a12.845,12.845,0,0,1-13.1,0c-.163-.087-.311-.2-.693-.453a9.714,9.714,0,0,0,6.793-2,4.968,4.968,0,0,1-4.253-3.323l1.674-.077a5.418,5.418,0,0,1-3.426-4.8l1.839.469a5.468,5.468,0,0,1-1.157-6.518,13.328,13.328,0,0,0,9.669,5.079,16.665,16.665,0,0,1,.2-2.248,4.643,4.643,0,0,1,7.32-2.786,1.781,1.781,0,0,0,2.033.254c.517-.222,1.038-.434,1.557-.65l.159.166-1.757,2.351,2.087-.564Z"
          fill="#1A2C3A"
        ></path>
        <g id="Grupo_48" data-name="Grupo 48">
          <path
            id="Caminho_962"
            data-name="Caminho 962"
            d="M1680.293,83.032a18.853,18.853,0,1,1,18.854-18.854A18.876,18.876,0,0,1,1680.293,83.032Zm0-36.318a17.464,17.464,0,1,0,17.465,17.464A17.484,17.484,0,0,0,1680.293,46.714Z"
            fill="#1A2C3A"
          ></path>
        </g>
      </g>
    </g>
  </SVG>
);

const SVG = styled.svg`
  ${({ theme }) => css`
    #Caminho_961,
    #Caminho_962 {
      transition: fill 0.2s linear;
    }
    :hover {
      #Caminho_961,
      #Caminho_962 {
        fill: ${theme.colors.darkPink};
      }
    }
  `}
`;

export default TwitterLogoLightBg;
