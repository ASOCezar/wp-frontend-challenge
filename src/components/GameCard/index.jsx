import * as Styled from './styles';

import PropTypes from 'prop-types';

export const GameCard = ({ imgArr, name }) => (
  <Styled.Container>
    <div className="card-img">
      <img src={imgArr.background} className="background" />
      <img src={imgArr.shadow} className="shadow" />
      <img src={imgArr.character} className="character" />
    </div>
    <div className="card-text">
      <h3 className="game-title">{name}</h3>
      <a href="#">SEE DETAILS &gt;</a>
    </div>
  </Styled.Container>
);

GameCard.propTypes = {
  imgArr: PropTypes.arrayOf({
    background: PropTypes.string.isRequired,
    shadow: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
  }),
  name: PropTypes.string.isRequired,
};
