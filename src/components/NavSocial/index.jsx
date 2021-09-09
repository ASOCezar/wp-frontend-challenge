import * as Styled from './styles';

import PropTypes from 'prop-types';

import FacebookLogoDarkBg from '../../assets/social-logos/darkBg/FacebookLogoDarkBg';
import TwitterLogoDarkBg from '../../assets/social-logos/darkBg/TwitterLogoDarkBg';
import InstagramLogoDarkBg from '../../assets/social-logos/darkBg/InstagramLogoDarkBg';
import YtbLogoDarkBg from '../../assets/social-logos/darkBg/YtbLogoDarkBg';
import LinkedinLogoDarkBg from '../../assets/social-logos/darkBg/LinkedinLogoDarkBg';

import FacebookLogoLightBg from '../../assets/social-logos/lightBg/FacebookLogoLightBg';
import TwitterLogoLightBg from '../../assets/social-logos/lightBg/TwitterLogoLightBg';
import InstagramLogoLightBg from '../../assets/social-logos/lightBg/InstagramLogoLightBg';
import YtbLogoLightBg from '../../assets/social-logos/lightBg/YtbLogoLightBg';
import LinkedinLogoLightBg from '../../assets/social-logos/lightBg/LinkedinLogoLightBg';

export const NavSocial = ({ dark }) => (
  <Styled.Container>
    {dark ? (
      <>
        <a className="social-a">
          <FacebookLogoLightBg />
        </a>
        <a className="social-a">
          <TwitterLogoLightBg />
        </a>
        <a className="social-a">
          <InstagramLogoLightBg />
        </a>
        <a className="social-a">
          <YtbLogoLightBg />
        </a>
        <a className="social-a">
          <LinkedinLogoLightBg />
        </a>
      </>
    ) : (
      <>
        <a className="social-a">
          <FacebookLogoDarkBg />
        </a>
        <a className="social-a">
          <TwitterLogoDarkBg />
        </a>
        <a className="social-a">
          <InstagramLogoDarkBg />
        </a>
        <a className="social-a">
          <YtbLogoDarkBg />
        </a>
        <a className="social-a">
          <LinkedinLogoDarkBg />
        </a>
      </>
    )}
  </Styled.Container>
);

NavSocial.propTypes = {
  dark: PropTypes.bool.isRequired,
};
