import * as Styled from './styles.js';

import logo from '../../assets/footer-images/jamcity-logo.svg';
import FacebookLogoDarkBg from '../../assets/social-logos/darkBg/FacebookLogoDarkBg';
import TwitterLogoDarkBg from '../../assets/social-logos/darkBg/TwitterLogoDarkBg';
import InstagramLogoDarkBg from '../../assets/social-logos/darkBg/InstagramLogoDarkBg';
import YtbLogoDarkBg from '../../assets/social-logos/darkBg/YtbLogoDarkBg';
import LinkedinLogoDarkBg from '../../assets/social-logos/darkBg/LinkedinLogoDarkBg';

import { AddressSection } from '../AddressSection/index.jsx';
import { NavSocial } from '../NavSocial/index.jsx';
import { NavLinks } from '../NavLinks/index.jsx';

import data from './dataLinks';

export const Footer = () => (
  <Styled.Container>
    <AddressSection />
    <Styled.ContentWrapper>
      <div className="first-column">
        <NavSocial dark={false} />
        <img src={logo} aria-label="logo da jamcity" className="footer-logo" />
      </div>
      <div className="second-column">
        <NavLinks links={data} />
        <Styled.LegalLinks>
          <a href="#" className="legal-link">
            Privacy Policy
          </a>
          <a href="#" className="legal-link">
            Terms of Service
          </a>
          <a href="#" className="legal-link">
            Press
          </a>
        </Styled.LegalLinks>
        <Styled.CopyrightText>
          <small>
            © 2020 Jam City, Inc. JAM CITY® and the JAM CITY Logo are registered and/or unregistered trademarks of Jam
            City, Inc.
          </small>
        </Styled.CopyrightText>
      </div>
    </Styled.ContentWrapper>
  </Styled.Container>
);
