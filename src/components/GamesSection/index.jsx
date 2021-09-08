import * as Styled from './styles';
import buttonBg from '../../assets/home-images/button-bg.svg';

import { GameCard } from '../GameCard';

import dataGames from '../GamesGrid/dataGames';
import { GamesGrid } from '../GamesGrid';

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
    <GamesGrid />
    <button className="btn-learnMore">
      <img src={buttonBg} />
    </button>
  </Styled.Container>
);
