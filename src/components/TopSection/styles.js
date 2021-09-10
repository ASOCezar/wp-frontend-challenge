import styled, { css } from 'styled-components';

import sectionBg from '../../assets/home-images/topSectionBg.png';

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    padding-left: 20px;
    position: relative;
    overflow: hidden;

    @media ${theme.media.desktop} {
      flex-direction: row;
      background-image: url(${sectionBg});
      width: 100%;
      height: 1080px;
      padding-left: calc(8% - 4px);
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-height: 100%;
    gap: calc(2vw);

    .title {
      width: 294.493px;
      height: 149.224px;

      font-size: ${theme.font.sizes.big};
      font-weight: ${theme.font.weight.extrabold};
      color: ${theme.colors.marineBlue};
      text-shadow: 1px 3px 1px #df8080;
      letter-spacing: -1px;
      line-height: 40px;

      .title-text {
        max-width: 100%;
        max-height: 100%;
      }

      .horizontal-line {
        margin-top: 15px;
        width: 85px;
        height: 10px;
        border-radius: 4px;

        background-color: #df8080;
      }
    }
    .description {
      max-width: 85%;
      text-align: left;
      color: ${theme.colors.marineBlue};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weight.semibold};
    }

    @media ${theme.media.desktop} {
      z-index: 3;
      gap: calc(3vw + 12px);
      margin-top: 211px;

      .title {
        font-size: clamp(60px, 5vw + 14px, 150px);
        font-weight: ${theme.font.weight.black};
        color: ${theme.colors.marineBlue};
        text-shadow: 3px 5px 1px #df8080;
        letter-spacing: -2px;
        line-height: 90%;
        width: calc(41vw + 11.8px);
        max-width: 799px;
        height: auto;
        max-height: 384.13px;

        .title-text {
          width: 100%;
          height: 100%;
        }

        .horizontal-line {
          margin-top: 35px;
          width: 100px;
          height: 18px;
          border-radius: 8px;

          background-color: #df8080;
        }
      }

      .description {
        height: auto;
        max-width: 591.5px;
        width: 100%;
        text-align: left;
        color: ${theme.colors.marineBlue};
        font-size: ${theme.font.sizes.xlarge};
        font-weight: ${theme.font.weight.semibold};
      }
    }
  `};
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;

    align-items: flex-end;
    justify-content: flex-end;

    .front-img {
      height: 72vw;
      object-fit: cover;
    }

    @media ${theme.media.desktop} {
      height: auto;
      width: auto;

      overflow: hidden;
      .front-img {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 50vw;
        width: calc(61vw + 8px);
        max-width: 1179px;
        z-index: 2;
        object-fit: cover;
      }
      .background-img {
        position: absolute;
        left: 775px;
        bottom: -283px;
      }
    }
  `};
`;
