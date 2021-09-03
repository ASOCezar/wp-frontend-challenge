import * as Styled from './styles';

import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/home-images/jamcity-logo.png';
import menuLogo from '../../assets/menu-images/jamcity-logo.png';
import facebookLogo from '../../assets/menu-images/facebook-logo.png';
import instagramLogo from '../../assets/menu-images/instagram-logo.png';
import twitterLogo from '../../assets/menu-images/twitter-logo.png';
import ytbLogo from '../../assets/menu-images/ytb-logo.png';
import linkedinLogo from '../../assets/menu-images/linkedin-logo.png';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const bar1 = useRef();
  const bar2 = useRef();
  const bar3 = useRef();

  console.log(menuOpen);

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
