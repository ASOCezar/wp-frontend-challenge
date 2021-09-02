import * as Styled from './styles';

export const Header = () => {
  return (
    <Styled.Container>
      <img className="logo" aria-label="logo da jamcity" />
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
          <img aria-label="logo da jamcity" />
        </div>
        <div className="menu-socials">
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
      </div>
    </Styled.Container>
  );
};
