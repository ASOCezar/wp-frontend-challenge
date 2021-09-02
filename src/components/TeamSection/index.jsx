import * as Styled from './styles';

export const TeamSection = () => (
  <Styled.Container>
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
  </Styled.Container>
);
