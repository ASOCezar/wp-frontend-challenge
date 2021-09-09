import * as Styled from './styles';

import creator1 from '../../assets/home-images/creators/creator1.png';
import creator2 from '../../assets/home-images/creators/creator2.png';
import creator1_2x from '../../assets/home-images/creators/creator1_2x.png';
import creator2_2x from '../../assets/home-images/creators/creator2_2x.png';
import teamImg from '../../assets/home-images/team/team.png';
import teamImg_2x from '../../assets/home-images/team/team_2x.png';

import { Title } from '../Title';
import { Button } from '../Button';
import { useMediaQuery } from '../../utils/useMediaQuery';

export const TeamSection = () => {
  const matchMedia = useMediaQuery('(min-width: 1024px)');

  return (
    <Styled.Container>
      <Title
        children1={<h2>Meet the Dream Team</h2>}
        children2={
          <span>
            Led by CEO Chris DeWolfe, former MySpace co-founder and CEO, and COO Josh Yguado, former 20th Century Fox
            executive, Jam City is the creative powerhouse behind some of the highest-grossing and most enduring mobile
            games.
          </span>
        }
      />
      <div className="team-images">
        {matchMedia ? (
          <>
            <div className="team-creators">
              <img src={creator1_2x} />
              <img src={creator2_2x} />
            </div>
            <div className="team-group">
              <img src={teamImg_2x} />
            </div>
          </>
        ) : (
          <>
            <div className="team-creators">
              <img src={creator1} />
              <img src={creator2} />
            </div>
            <div className="team-group">
              <img src={teamImg} />
            </div>
          </>
        )}
        <button className="btn-learnMore">
          <Button text="Learn More" hoverText="Let's Go" />
        </button>
      </div>
    </Styled.Container>
  );
};
