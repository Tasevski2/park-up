import {
    ParkingZoneWrapper,
    Container,
    ParkingName,
    InfoWrapper,
    Label,
    Value,
    ProgressBar,
    ProgressBarLabel
} from './styles';

const ParkingZoneCard = ({ info }) => {

    return <ParkingZoneWrapper item md={3}>
        <Container>
            <ParkingName>{info.parkingName}</ParkingName>
            <InfoWrapper>
                <Label>Odgovorno lice:</Label>
                <Value>{info.responsiblePerson}</Value>
            </InfoWrapper>
            <InfoWrapper>
                <Label>Broj parking mesta:</Label>
                <Value>{info.parkingSpaces}</Value>
            </InfoWrapper>
            <ProgressBar
                percent={Math.round(info.takenParkingSpaces / info.parkingSpaces * 100)}
                label={() => <ProgressBarLabel>{Math.round(info.takenParkingSpaces / info.parkingSpaces * 100)}%</ProgressBarLabel>}
            />
        </Container>
    </ParkingZoneWrapper>
};

export default ParkingZoneCard;