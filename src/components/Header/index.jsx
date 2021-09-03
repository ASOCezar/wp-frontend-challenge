import * as Styled from './styles';

import logo from '../../assets/home-images/logo.png';
import Menulogo from '../../assets/menu-images/jamcity-logo.svg';
import facebookLogo from '../../assets/menu-images/facebook-logo.svg';
import instagramLogo from '../../assets/menu-images/instagram-logo.svg';
import twitterLogo from '../../assets/menu-images/twitter-logo.svg';
import ytbLogo from '../../assets/menu-images/ytb-logo.svg';
import linkedinLogo from '../../assets/menu-images/linkedin-logo.svg';

export const Header = () => {
  return (
    <Styled.Container>
      <img src={logo} className="logo" aria-label="logo da jamcity" />
      <button className="open-menu">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>
      <div className="menu-wrapper">
        <nav>
          <a href="#" className="menu-link">
            Who We Are
          </a>
          <a href="#" className="menu-link">
            Games
          </a>
          <a href="#" className="menu-link">
            Press
          </a>
          <a href="#" className="menu-link">
            Blog
          </a>
          <a href="#" className="menu-link">
            Carrers
          </a>
          <a href="#" className="menu-link">
            Support
          </a>
          <a href="#" className="menu-link">
            FAQs
          </a>
        </nav>
        <div className="menu-logo">
          <img src={Menulogo} aria-label="logo da jamcity" />
        </div>
        <div className="menu-socials">
          <button className="social-button">
            <img src={facebookLogo} aria-label="logo do facebook" />
          </button>
          <button className="social-button">
            <img src={twitterLogo} aria-label="logo do twitter" />
          </button>
          <button className="social-button">
            <img src={instagramLogo} aria-label="logo do instagram" />
          </button>
          <button className="social-button">
            <img src={ytbLogo} aria-label="logo do youtube" />
          </button>
          <button className="social-button">
            <img src={linkedinLogo} aria-label="logo do linkedin" />
          </button>
        </div>
      </div>
    </Styled.Container>
  );
};
