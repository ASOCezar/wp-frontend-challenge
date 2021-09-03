import * as Styled from './styles';

import { Header } from '../../components/Header';
import { Content } from '../../components/Content';

function Home() {
  return (
    <Styled.Container>
      <Header />
      <Content />
    </Styled.Container>
  );
}

export default Home;
