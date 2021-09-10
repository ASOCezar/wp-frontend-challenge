import * as Styled from './styles';

import creator1 from '../../assets/home-images/creators/creator1.png';
import creator2 from '../../assets/home-images/creators/creator2.png';
import creator1_2x from '../../assets/home-images/creators/creator1_2x.png';
import creator2_2x from '../../assets/home-images/creators/creator2_2x.png';
import teamImg from '../../assets/home-images/team/team.png';
import teamImg_2x from '../../assets/home-images/team/team_2x.png';
import teamBg from '../../assets/home-images/team/bg-team.png';
import teamBg_2x from '../../assets/home-images/team/bg-team_2x.png';

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
            Led by <strong>CEO Chris DeWolfe,</strong> former MySpace co-founder and{' '}
            <strong>CEO, and COO Josh Yguado,</strong> former 20th Century Fox executive, Jam City is the creative
            powerhouse behind some of the highest-grossing and most enduring mobile games.
          </span>
        }
      />
      <Styled.ImageContainer>
        {matchMedia ? (
          <>
            <div className="team-creators">
              <img src={creator1_2x} id="chris" />
              <img src={creator2_2x} id="josh" />
            </div>
            <div className="team-group">
              <img src={teamImg_2x} className="team-img" />
              <img src={teamBg_2x} className="team-bg" />
              <div className="btn-learnMore">
                <Button text="Learn More" hoverText="Let's Go" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="team-creators">
              <img src={creator1} id="chris" />
              <img src={creator2} id="josh" />
            </div>
            <div className="team-group">
              <img src={teamBg} className="team-bg" />
              <img src={teamImg} className="team-img" />
              <div className="btn-learnMore">
                <Button text="Learn More" hoverText="Let's Go" />
              </div>
            </div>
          </>
        )}
      </Styled.ImageContainer>
    </Styled.Container>
  );
};
