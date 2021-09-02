import * as Styled from './styles.js';

export const Footer = () => (
  <Styled.Container>
    <div className="social-wrapper">
      <button className="social-button">
        <img aria-label="logo do facebook" />
      </button>
      <button className="social-button">
        <img aria-label="logo do twitter" />
      </button>
      <button className="social-button">
        <img aria-label="logo do instagram" />
      </button>
      <button className="social-button">
        <img aria-label="logo do youtube" />
      </button>
      <button className="social-button">
        <img aria-label="logo do linkedin" />
      </button>
    </div>
    <div className="footer-logo">
      <img aria-label="logo da jamcity" />
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
