import * as Styled from './styles';

export const AddressSection = () => (
  <Styled.Container>
    <div className="addres-info">
      <span>3562 Eastham Drive Culver City CA 90232</span>
    </div>
    <div className="tooltip-adress">
      <div className="tooltip">
        <h4>Jam City HQ</h4>
        <p>3562 Eastham Drive Culver City CA 90232</p>
        <a href="#">View on Google Maps</a>
      </div>
    </div>
  </Styled.Container>
);
