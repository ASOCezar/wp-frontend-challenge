import * as Styled from './styles';

import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/home-images/jamcity-logo.png';
import menuLogo from '../../assets/menu-images/jamcity-logo.png';

import FacebookLogoDarkBg from '../../assets/social-logos/darkBg/FacebookLogoDarkBg';
import TwitterLogoDarkBg from '../../assets/social-logos/darkBg/TwitterLogoDarkBg';
import InstagramLogoDarkBg from '../../assets/social-logos/darkBg/InstagramLogoDarkBg';
import YtbLogoDarkBg from '../../assets/social-logos/darkBg/YtbLogoDarkBg';
import LinkedinLogoDarkBg from '../../assets/social-logos/darkBg/LinkedinLogoDarkBg';

import FacebookLogoLightBg from '../../assets/social-logos/lightBg/FacebookLogoLightBg';
import TwitterLogoLightBg from '../../assets/social-logos/lightBg/TwitterLogoLightBg';
import InstagramLogoLightBg from '../../assets/social-logos/lightBg/InstagramLogoLightBg';
import YtbLogoLightBg from '../../assets/social-logos/lightBg/YtbLogoLightBg';
import LinkedinLogoLightBg from '../../assets/social-logos/lightBg/LinkedinLogoLightBg';

import { useMediaQuery } from '../../utils/useMediaQuery';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const bar1 = useRef();
  const bar2 = useRef();
  const bar3 = useRef();

  const matchMedia = useMediaQuery('(min-width: 1024px)');

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
                <FacebookLogoLightBg />
              </button>
              <button className="social-button">
                <TwitterLogoLightBg />
              </button>
              <button className="social-button">
                <InstagramLogoLightBg />
              </button>
              <button className="social-button">
                <YtbLogoLightBg />
              </button>
              <button className="social-button">
                <LinkedinLogoLightBg />
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </Styled.Container>
  );
};
