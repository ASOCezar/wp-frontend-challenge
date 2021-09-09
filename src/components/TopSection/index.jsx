import * as Styled from './styles';

import titleImg from '../../assets/home-images/description-image.svg';
import buttonBg from '../../assets/home-images/button-bg.svg';
import mainImg from '../../assets/home-images/main-img.png';
import mainImg2x from '../../assets/home-images/main-img2x.png';
import mainBg from '../../assets/home-images/main-bg.png';
import { useMediaQuery } from '../../utils/useMediaQuery';
import { Button } from '../Button';

export const TopSection = () => {
  const mediaMatch = useMediaQuery('(min-width: 1024px');

  return (
    <Styled.Container>
      <Styled.Wrapper className="text-topSection">
        <div className="title">
          <span className="title-text">10 years creating the best in mobile entertainment.</span>
          <div className="horizontal-line" />
        </div>
        <div className="description">
          <span>
            Jam City&apos;s global franchise <strong>Cookie Jam</strong> has generated more than{' '}
            <strong>half a billion dollars,</strong> and <strong>Panda Pop</strong> has more than{' '}
            <strong>120 million downloads</strong> to date.
          </span>
        </div>
        <Button text="Learn More" hoverText="Let's Go" />
      </Styled.Wrapper>
      <Styled.ImageContainer>
        {mediaMatch ? (
          <>
            <img src={mainImg2x} className="front-img" />
            <img src={mainBg} className="background-img" />
          </>
        ) : (
          <img src={mainImg} className="front-img" />
        )}
      </Styled.ImageContainer>
    </Styled.Container>
  );
};
