import * as Styled from './styles';

import titleImg from '../../assets/home-images/description-image.svg';
import buttonBg from '../../assets/home-images/button-bg.svg';
import mainImg from '../../assets/home-images/main-img.png';
import mainBg from '../../assets/home-images/main-bg.png';

export const TopSection = () => (
  <Styled.Container>
    <div className="title">
      <img src={titleImg} />
    </div>
    <div className="description">
      <span>
        Jam City&apos;s global franchise <strong>Cookie Jam</strong> has generated more than{' '}
        <strong>half a billion dollars,</strong> and <strong>Panda Pop</strong> has more than{' '}
        <strong>120 million downloads</strong> to date.
      </span>
    </div>
    <button className="btn-learnMore">
      <img src={buttonBg} />
    </button>
    <div className="main-image">
      <img src={mainImg} />
      <img src={mainBg} className="background-img" />
    </div>
  </Styled.Container>
);
