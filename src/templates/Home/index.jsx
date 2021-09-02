import * as Styled from './styles';

import { Header } from '../../components/Header';
import { TopSection } from '../../components/TopSection';
import { GamesSection } from '../../components/GamesSection';
import { TeamSection } from '../../components/TeamSection';
import { AddressSection } from '../../components/AddressSection';
import { Footer } from '../../components/Footer';

function Home() {
  return (
    <Styled.Container>
      <Header />
      <TopSection />
      <GamesSection />
      <TeamSection />
      <AddressSection />
      <Footer />
    </Styled.Container>
  );
}

export default Home;
