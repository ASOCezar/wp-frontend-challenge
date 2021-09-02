function Home() {
  return (
    <div className="home">
      <header>
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
      </header>
      <section className="top-section">
        <div className="title">
          <img />
        </div>
        <div className="description">
          <span>
            Jam City&apos;s global franchise <strong>Cookie Jam</strong> has generated more than{' '}
            <strong>half a billion dollars,</strong> and <strong>Panda Pop</strong> has more than{' '}
            <strong>120 million downloads</strong> to date.
          </span>
        </div>
        <button className="btn-learnMore">
          <img />
        </button>
        <div className="main-image">
          <img />
        </div>
      </section>
      <section className="mid-section">
        <div className="title">
          <h2>Featured Games</h2>
        </div>
        <div className="description">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id neque malesuada, blandit sapien in, vehicula
            massa. Donec velit dolor, commodo posuere.
          </span>
        </div>
        <div className="cardGames-wrapper">
          <div className="card">
            <div className="card-img">
              <img className="background" />
              <img className="shadow" />
              <img className="character" />
            </div>
            <div className="card-text">
              <h3 className="game-title"></h3>
              <a href="#">SEE DETAILS &gt;</a>
            </div>
          </div>
        </div>
        <button className="btn-learnMore">
          <img />
        </button>
      </section>
      <section className="team-section">
        <div className="title">
          <h2>Meet the Dream Team</h2>
        </div>
        <div className="description">
          <span>
            Led by CEO Chris DeWolfe, former MySpace co-founder and CEO, and COO Josh Yguado, former 20th Century Fox
            executive, Jam City is the creative powerhouse behind some of the highest-grossing and most enduring mobile
            games.
          </span>
        </div>
        <div className="team-images">
          <div className="team-creators">
            <img />
            <img />
          </div>
          <div className="team-group">
            <img />
          </div>
          <button className="btn-learnMore">
            <img />
          </button>
        </div>
      </section>
      <section className="adress-wrapper">
        <div className="addres-info">
          <span>3562 Eastham Drive Culver City CA 90232</span>
        </div>
        <div className="tooltip-adress">
          <div className="tooltip">
            <h4>Jam City HQ</h4>
            <p>3562 Eastham Drive Culver City CA 90232</p>
            <a href="#">View on Google Maps</a>
          </div>
        </div>
      </section>
      <footer>
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
            © 2020 Jam City, Inc. JAM CITY® and the JAM CITY Logo are registered and/or unregistered trademarks of Jam
            City, Inc.
          </small>
        </div>
      </footer>
    </div>
  );
}

export default Home;
