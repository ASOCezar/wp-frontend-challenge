import * as Styled from './styles';
import buttonBg from '../../assets/home-images/button-bg.svg';

import { GameCard } from '../GameCard';

import dataGames from '../GamesGrid/dataGames';
import { GamesGrid } from '../GamesGrid';
import { Button } from '../Button';
import { Title } from '../Title';

export const GamesSection = () => (
  <Styled.Container>
    <Title
      children1={<h2>Featured Games</h2>}
      children2={
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id neque malesuada, blandit sapien in, vehicula
          massa. Donec velit dolor, commodo posuere.
        </span>
      }
    />
    <GamesGrid />
    <Button text="Browse More Games" hoverText="Let's Go" />
  </Styled.Container>
);
