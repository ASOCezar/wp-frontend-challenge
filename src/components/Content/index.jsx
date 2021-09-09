import { AddressSection } from '../AddressSection';
import { Footer } from '../Footer';
import { GamesSection } from '../GamesSection';
import { TeamSection } from '../TeamSection';
import { TopSection } from '../TopSection';
import * as Styled from './styles';

export const Content = () => (
  <Styled.Container>
    <TopSection />
    <GamesSection />
    <TeamSection />
    <Footer />
  </Styled.Container>
);
