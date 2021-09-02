import * as Styled from './styles';

export const GamesSection = () => (
  <Styled.Container>
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
  </Styled.Container>
);
