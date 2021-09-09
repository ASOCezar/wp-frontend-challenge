import * as Styled from './styles.js';

import logo from '../../assets/footer-images/jamcity-logo.svg';
import FacebookLogoDarkBg from '../../assets/social-logos/darkBg/FacebookLogoDarkBg';
import TwitterLogoDarkBg from '../../assets/social-logos/darkBg/TwitterLogoDarkBg';
import InstagramLogoDarkBg from '../../assets/social-logos/darkBg/InstagramLogoDarkBg';
import YtbLogoDarkBg from '../../assets/social-logos/darkBg/YtbLogoDarkBg';
import LinkedinLogoDarkBg from '../../assets/social-logos/darkBg/LinkedinLogoDarkBg';
import { AddressSection } from '../AddressSection/index.jsx';

export const Footer = () => (
  <Styled.Container>
    <AddressSection />
    <div className="footer-content">
      <div className="first-column">
        <div className="social-wrapper">
          <button className="social-button">
            <FacebookLogoDarkBg />
          </button>
          <button className="social-button">
            <TwitterLogoDarkBg />
          </button>
          <button className="social-button">
            <InstagramLogoDarkBg />
          </button>
          <button className="social-button">
            <YtbLogoDarkBg />
          </button>
          <button className="social-button">
            <LinkedinLogoDarkBg />
          </button>
        </div>
        <div className="footer-logo">
          <img src={logo} aria-label="logo da jamcity" />
        </div>
      </div>

      <div className="second-column">
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
            © 2020 Jam City, Inc. JAM CITY® and the JAM CITY Logo are registered and/or unregistered trademarks of Jam
            City, Inc.
          </small>
        </div>
      </div>
    </div>
  </Styled.Container>
);
