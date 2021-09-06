import * as Styled from './styles';

import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/home-images/jamcity-logo.png';
import menuLogo from '../../assets/menu-images/jamcity-logo.png';

import facebookLogoDarkBg from '../../assets/social-logos/darkBg/facebook-logo.png';
import twitterLogoDarkBg from '../../assets/social-logos/darkBg/twitter-logo.png';
import instagramLogoDarkBg from '../../assets/social-logos/darkBg/instagram-logo.png';
import ytbLogoDarkBg from '../../assets/social-logos/darkBg/ytb-logo.png';
import linkedinLogoDarkBg from '../../assets/social-logos/darkBg/linkedin-logo.png';

import facebookLogoLightBg from '../../assets/social-logos/lightBg/facebook-logo.png';
import twitterLogoLightBg from '../../assets/social-logos/lightBg/twitter-logo.png';
import instagramLogoLightBg from '../../assets/social-logos/lightBg/instagram-logo.png';
import ytbLogoLightBg from '../../assets/social-logos/lightBg/ytb-logo.png';
import linkedinLogoLightBg from '../../assets/social-logos/lightBg/linkedin-logo.png';
import { useMediaQuery } from '../../utils/useMediaQuery';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const bar1 = useRef();
  const bar2 = useRef();
  const bar3 = useRef();

  const matchMedia = useMediaQuery('(min-width: 1024px)');

  console.log(matchMedia);

  function changeMenuIcon() {
    bar1.current.classList.toggle('change');
    bar2.current.classList.toggle('change');
    bar3.current.classList.toggle('change');
  }

  return (
    <Styled.Container menuOpen={menuOpen}>
      <img src={logo} className="logo" aria-label="logo da jamcity" />
      <button
        className="open-menu"
        onClick={() => {
          changeMenuIcon();
          setMenuOpen((prevState) => !prevState);
        }}
      >
        <div className="bar1" ref={bar1}></div>
        <div className="bar2" ref={bar2}></div>
        <div className="bar3" ref={bar3}></div>
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
          <img src={menuLogo} aria-label="logo da jamcity" />
        </div>
        <div className="menu-socials">
          {matchMedia ? (
            <>
              <button className="social-button">
                <img src={facebookLogoLightBg} aria-label="logo do facebook" />
              </button>
              <button className="social-button">
                <img src={twitterLogoLightBg} aria-label="logo do twitter" />
              </button>
              <button className="social-button">
                <img src={instagramLogoLightBg} aria-label="logo do instagram" />
              </button>
              <button className="social-button">
                <img src={ytbLogoLightBg} aria-label="logo do youtube" />
              </button>
              <button className="social-button">
                <img src={linkedinLogoLightBg} aria-label="logo do linkedin" />
              </button>
            </>
          ) : (
            <>
              <button className="social-button">
                <img src={facebookLogoDarkBg} aria-label="logo do facebook" />
              </button>
              <button className="social-button">
                <img src={twitterLogoDarkBg} aria-label="logo do twitter" />
              </button>
              <button className="social-button">
                <img src={instagramLogoDarkBg} aria-label="logo do instagram" />
              </button>
              <button className="social-button">
                <img src={ytbLogoDarkBg} aria-label="logo do youtube" />
              </button>
              <button className="social-button">
                <img src={linkedinLogoDarkBg} aria-label="logo do linkedin" />
              </button>
            </>
          )}
        </div>
      </div>
    </Styled.Container>
  );
};
