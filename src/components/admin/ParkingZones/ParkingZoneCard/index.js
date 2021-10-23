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

const ParkingZoneCard = ({ info }) => {
  let history = useHistory();

  return (
    <ParkingZoneWrapper item xs={11} sm={6} md={3}>
      <Container onClick={() => history.push(`/zone/${info.id}`)}>
        <ZoneName>{info.zoneName}</ZoneName>
        <InfoWrapper>
          <Label>Одговорни лица:</Label>
          {info.responsiblePersons.slice(0, 1).map((person, index) => (
            <Value key={index}>{person}</Value>
          ))}
          {info.responsiblePersons.length > 1 ? (
            <Value>...</Value>
          ) : (
            <Value style={{ height: '23px' }} />
          )}
        </InfoWrapper>
        <InfoWrapper>
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
