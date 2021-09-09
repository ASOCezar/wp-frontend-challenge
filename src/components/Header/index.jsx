import * as Styled from './styles';

import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import logo from '../../assets/home-images/jamcity-logo.png';
import menuLogo from '../../assets/menu-images/jamcity-logo.png';

import { useMediaQuery } from '../../utils/useMediaQuery';
import { NavSocial } from '../NavSocial';
import { NavLinks } from '../NavLinks';

import data from './dataLinks';

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
        {matchMedia ? (
          <NavLinks links={data} dark={true} horizontal={true} />
        ) : (
          <NavLinks links={data} dark={false} horizontal={false} />
        )}

        <div className="menu-logo">
          <img src={menuLogo} aria-label="logo da jamcity" />
        </div>
        {matchMedia ? <NavSocial dark={true} /> : <NavSocial dark={false} />}
      </div>
    </Styled.Container>
  );
};
