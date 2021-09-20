import {
    ParkingLotWrapper,
    Container,
    ParkingName,
    InfoWrapper,
    Label,
    Value,
    ProgressBar,
    ProgressBarLabel
} from './styles';

const ParkingLotCard = ({ info }) => {

    return <ParkingLotWrapper item md={3}>
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
            {/* TODO Progress bar */}
            <ProgressBar
                percent={Math.round(info.takenParkingSpaces / info.parkingSpaces * 100)}
                label={() => <ProgressBarLabel>{Math.round(info.takenParkingSpaces / info.parkingSpaces * 100)}%</ProgressBarLabel>}
            />
        </Container>
    </ParkingLotWrapper>
};

export default ParkingLotCard;