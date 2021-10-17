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
          {info.responsiblePersons.length > 1 ? <Value>...</Value> : null}
        </InfoWrapper>
        <InfoWrapper>
          <Label>Број на паркинг места:</Label>
          <Value>{info.parkingSpaces}</Value>
        </InfoWrapper>
        <ProgressBar
          percent={Math.floor(
            (info.takenParkingSpaces / info.parkingSpaces) * 100
          )}
          label={() => (
            <ProgressBarLabel>
              {info.takenParkingSpaces}/{info.parkingSpaces}
            </ProgressBarLabel>
          )}
        />
      </Container>
    </ParkingZoneWrapper>
  );
};

export default ParkingZoneCard;
