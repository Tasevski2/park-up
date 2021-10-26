import { useHistory } from 'react-router-dom';

import {
  ParkingZoneWrapper,
  Container,
  ZoneName,
  InfoWrapper,
  Label,
  Value,
  ProgressBar,
  ProgressBarLabel,
} from './styles';

import DropdownViewer from '../../../DropdownViewer';

const ParkingZoneCard = ({ info }) => {
  let history = useHistory();

  return (
    <ParkingZoneWrapper item xs={11} sm={6} md={3}>
      <Container onClick={() => history.push(`/zone/${info.id}`)}>
        <ZoneName>{info.zoneName}</ZoneName>
        <InfoWrapper>
          <Label>Одговорни лица:</Label>
          <DropdownViewer data={info.responsiblePersons} />
        </InfoWrapper>
        <InfoWrapper style={{ marginTop: '30px' }}>
          <Label>Број на паркинг места:</Label>
          <Value>{info.parkingSpacesNumber}</Value>
        </InfoWrapper>
        <ProgressBar
          percent={Math.floor(
            (info.takenParkingSpaces / info.parkingSpacesNumber) * 100
          )}
          label={() => (
            <ProgressBarLabel>
              {info.takenParkingSpaces}/{info.parkingSpacesNumber}
            </ProgressBarLabel>
          )}
        />
      </Container>
    </ParkingZoneWrapper>
  );
};

export default ParkingZoneCard;
