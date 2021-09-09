import styled, { css } from 'styled-components';

import sectionBg from '../../assets/home-images/topSectionBg.png';

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100vh - 113px);
    max-height: 686px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    padding-inline: 40px;

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
      text-align: left;
      color: ${theme.colors.marineBlue};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weight.semibold};
    }

    .btn-learnMore {
      border: none;
      background-color: transparent;
      padding: 0;
      margin-top: 10px;
      width: 159px;
      height: 46px;
      outline: none;
      user-select: none;
    }

    .main-img {
      width: calc(100% + 40px);
      height: auto;
      display: flex;
      flex-direction: row;

      align-items: flex-end;
      justify-content: flex-end;

      @media ${theme.media.tablet} {
        .front-img {
          width: 60%;
        }
      }
    }

    @media ${theme.media.desktop} {
      flex-direction: row;
      background-image: url(${sectionBg});
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 100vh;
      max-height: 1080px;
      padding-left: 4%;

      .main-img {
        width: 100%;
        height: 100%;
        .front-img {
          width: 60%;
          height: 100%;
          position: absolute;
          max-width: 1179px;
          z-index: 2;
        }
        .background-img {
          position: absolute;
        }
      }

      .text-topSection {
        z-index: 3;
        .title {
          font-size: 65px;
          font-weight: ${theme.font.weight.black};
          color: ${theme.colors.marineBlue};
          text-shadow: 3px 5px 1px #df8080;
          letter-spacing: -2px;
          line-height: 65px;
          width: 100%;
          height: 100%;

          .title-text {
            max-width: 100%;
            max-height: 100%;
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
          text-align: left;
          color: ${theme.colors.marineBlue};
          font-size: ${theme.font.sizes.xlarge};
          font-weight: ${theme.font.weight.semibold};
        }
      }

      .btn-learnMore {
        margin-top: 45px;
        width: 275px;
        height: 80px;
      }
    }
  `}
`;
