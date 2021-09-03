import * as Styled from './styles.js';

import logo from '../../assets/footer-images/jamcity-logo.svg';
import facebookLogo from '../../assets/footer-images/facebook-logo.svg';
import instagramLogo from '../../assets/footer-images/instagram-logo.svg';
import twitterLogo from '../../assets/footer-images/twitter-logo.svg';
import ytbLogo from '../../assets/footer-images/ytb-logo.svg';
import linkedinLogo from '../../assets/footer-images/linkedin-logo.svg';

export const Footer = () => (
  <Styled.Container>
    <div className="social-wrapper">
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
    <div className="footer-logo">
      <img src={logo} aria-label="logo da jamcity" />
    </div>
    <nav>
      <a href="#" className="menu-link">
        Who We Are
      </a>
      <a href="#" className="menu-link">
        Games
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
    </nav>
    <div className="legal-infos">
      <a href="#" className="legal-link">
        Privacy Policy
      </a>
      <a href="#" className="legal-link">
        Terms of Service
      </a>
      <a href="#" className="legal-link">
        Press
      </a>
    </div>
    <div className="copyrights">
      <small>
        © 2020 Jam City, Inc. JAM CITY® and the JAM CITY Logo are registered and/or unregistered trademarks of Jam City,
        Inc.
      </small>
    </div>
  </Styled.Container>
);
