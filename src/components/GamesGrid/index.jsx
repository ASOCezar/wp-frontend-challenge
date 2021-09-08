import * as Styled from './styles';

import dataGames from './dataGames';
import { GameCard } from '../GameCard';

export const GamesGrid = () => (
  <Styled.Container className="cardGames-wrapper">
    {dataGames.map((game) => (
      <GameCard key={game.name} imgArr={game.image} name={game.name} />
    ))}
  </Styled.Container>
);
