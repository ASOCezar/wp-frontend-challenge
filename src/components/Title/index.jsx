import * as Styled from './styles';

import PropTypes from 'prop-types';

export const Title = ({ children1, children2 }) => (
  <Styled.Container>
    <div className="title">{children1}</div>
    <div className="description">{children2}</div>
  </Styled.Container>
);

Title.propTypes = {
  children1: PropTypes.node.isRequired,
  children2: PropTypes.node.isRequired,
};
