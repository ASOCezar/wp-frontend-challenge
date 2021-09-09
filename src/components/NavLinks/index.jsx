import * as Styled from './styles';
import PropTypes from 'prop-types';

export const NavLinks = ({ links, horizontal = false, dark = false }) => (
  <Styled.Container dark={dark} horizontal={horizontal}>
    {links.map((link) => (
      <a key={link.title} href={link.ref}>
        {link.title}
      </a>
    ))}
  </Styled.Container>
);

NavLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      ref: PropTypes.string.isRequired,
    }),
  ),
  horizontal: PropTypes.bool,
  dark: PropTypes.bool,
};
