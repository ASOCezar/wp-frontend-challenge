import * as Styled from './styles';
import buttonBg from '../../assets/home-images/button-bg.svg';

import { GameCard } from '../GameCard';

import dataGames from './dataGames';

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
      {dataGames.map((game) => (
        <GameCard key={game.name} imgArr={game.image} name={game.name} />
      ))}
    </div>
    <button className="btn-learnMore">
      <img src={buttonBg} />
    </button>
  </Styled.Container>
);
